import { ngmca } from 'ml-ngmca';

/**
 * Performing non-negative matrix factorization solving argmin_(A >= 0, S >= 0) 1 / 2 * ||Y - AS||_2^2 + lambda * ||S||_1
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the estimation.
 * @param {Object} range - Range with from to and optional the sub-matrix with the mass x axis, times, and the number of pure components
 * @param {Number} [range.from] - lower limit in the retention time
 * @param {Number} [range.to] - upper limit in the retention time
 * @param {Array<Array>} [range.matrix] - sub-matrix of the range, if does not exist it will be computed.
 * @param {Array<Array>} [range.times] - retention times axis of the range, if does not exist it will be computed.
 * @param {Array<Array>} [range.xAxis] - m/z axis of the range, if does not exist it will be computed.
 * @param {Object} options - Options of ngmca factorization method
 * @param {Number} [options.maximumIteration = 500] - Maximum number of iterations
 * @param {Number} [options.maximumFBIIteration = 80] - Maximum number of iterations of the Forward-Backward subroutine
 * @param {Number} [options.FBRelativeDifferenceTolerance = 1e-5] - relative difference tolerance for convergence of the Forward-Backward sub-iterations
 * @param {Number} [options.phaseRatio = 0.8] - transition between decreasing thresholding phase and refinement phase in pourcent of the iterations
 * @param {Number} [options.tauMAD = 1] - constant coefficient for the final threshold computation
 */

export function deconvolution(chromatogram, range, options) {
  let { matrix, xAxis, times } = ['matrix', 'xAxis', 'times'].some(
    (e) => !range[e],
  )
    ? chromatogram.getMatrix(range)
    : range;
  let rank =
    !range.rank || isNaN(range.rank)
      ? chromatogram.estimateNbPureComponents({ matrix })
      : range.rank;
  if (rank < 1) {
    throw new RangeError(
      `Rank should be a positive number for ${range.from} - ${range.to}`,
    );
  }

  let result = ngmca(matrix, Number(rank), options);
  let maxByRow = [];
  for (let i = 0; i < result.S.rows; i++) {
    maxByRow.push(result.S.maxRow(i));
  }

  result.S.scale('row', { scale: maxByRow });
  result.A.scale('column', {
    scale: maxByRow.map((e) => 1 / e),
  });

  return Object.assign(result, { matrix, times, xAxis, rank });
}
