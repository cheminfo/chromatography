import { ngmca } from 'ml-ngmca';

/**
 * Performing non-negative matrix factorization solving argmin_(A >= 0, S >= 0) 1 / 2 * ||Y - AS||_2^2 + lambda * ||S||_1
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the estimation.
 * @param {Array<Object>} ranges - List of ranges with from to and optional the sub-matrix with the mass x axis, times, and the number of pure components
 * @param {Object} options - Options of ngmca factorization method
 * @param {Number} [options.maximumIteration = 500] - Maximum number of iterations
 * @param {Number} [options.maximumFBIIteration = 80] - Maximum number of iterations of the Forward-Backward subroutine
 * @param {Number} [options.FBRelativeDifferenceTolerance = 1e-5] - relative difference tolerance for convergence of the Forward-Backward sub-iterations
 * @param {Number} [options.phaseRatio = 0.8] - transition between decreasing thresholding phase and refinement phase in pourcent of the iterations
 * @param {Number} [options.tauMAD = 1] - constant coefficient for the final threshold computation
 */

export function deconvolution(chromatogram, ranges, options) {
  let deconvoluted = [];
  for (let p = 0; p < ranges.length; p++) {
    let data = ranges[p];
    let { matrix, xAxis, times } = ['matrix', 'xAxis', 'times'].some(
      (e) => !data[e],
    )
      ? chromatogram.getMatrix([data])[0]
      : data;
    let rank =
      !data.rank || isNaN(data.rank)
        ? chromatogram.estimateNbPureComponents([{ matrix }])[0]
        : data.rank;
    if (rank < 1) {
      new RangeError(
        `Rank should be a positive number for ${data.from} - ${data.to}`,
      );
      continue;
    }

    let result = ngmca(matrix, Number(rank), options);
    let maxByRow = new Float32Array(result.S.rows);
    for (let i = 0; i < result.S.rows; i++) {
      maxByRow[i] = result.S.maxRow(i);
    }

    result.S.scale('row', { scale: Array.from(maxByRow) });
    result.A.scale('column', {
      scale: Array.from(maxByRow).map((e) => 1 / e),
    });

    deconvoluted.push(Object.assign(result, { matrix, times, xAxis, rank }));
  }
  return deconvoluted;
}
