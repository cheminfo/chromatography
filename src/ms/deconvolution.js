import { ngmca } from 'ml-ngmca';

import { estimateNbPureComponents } from '../util/estimateNbPureComponents';

/**
 * Performing non-negative matrix factorization solving argmin_(A >= 0, S >= 0) 1 / 2 * ||Y - AS||_2^2 + lambda * ||S||_1
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the estimation.
 * @param {Array<Array>} [range.matrix] - sub-matrix of the range, if does not exist it will be computed.
 * @param {Array<Array>} [range.times] - retention times axis of the range, if does not exist it will be computed.
 * @param {Array<Array>} [range.mzAxis] - m/z axis of the range, if does not exist it will be computed.
 * @param {Object} options - Options of ngmca factorization method
 * @param {Object} [options.range] - Range with from to and optional the sub-matrix with the mass x axis, times, and the number of pure components
 * @param {Number} [options.range.from] - lower limit in the retention time
 * @param {Number} [options.range.to] - upper limit in the retention time
 * @param {Number} [options.maximumIteration = 500] - Maximum number of iterations.
 * @param {Number} [options.maxFBIteration = 80] - Maximum number of iterations of the Forward-Backward subroutine.
 * @param {Object} [options.randGenerator = Math.random] - Random number generator for the subroutine of initialization.
 * @param {Number} [options.maxInitFBIteration = 50] - Maximum number of iterations of the Forward-Backward subroutine at the initialization.
 * @param {Number} [options.toleranceFB = 1e-5] - relative difference tolerance for convergence of the Forward-Backward sub-iterations.
 * @param {Number} [options.toleranceFBInit = 0] - relative difference tolerance for convergence of the Forward-Backward sub-iterations at the initialization.
 * @param {Number} [options.phaseRatio = 0.8] - transition between decreasing thresholding phase and refinement phase in percent of the iterations.
 * @param {Number} [options.tauMAD = 1] - constant coefficient for the final threshold computation.
 * @param {Boolean} [options.useTranspose = false] - if true the originalMatrix is transposed.
 */

export function deconvolution(chromatogram, options) {
  let { range, rank } = options;
  let { matrix, mzAxis, times } = chromatogram.getMzVsTimesMatrix(range);

  if (!rank) rank = estimateNbPureComponents(chromatogram, { range, matrix });

  if (rank < 1) {
    throw new RangeError(
      `Rank should be a positive number for ${range.from} - ${range.to}`,
    );
  }

  let result = ngmca(matrix, rank, options);
  let maxByRow = [];
  for (let i = 0; i < result.S.rows; i++) {
    maxByRow.push(result.S.maxRow(i));
  }

  result.S.scale('row', { scale: maxByRow });
  result.A.scale('column', {
    scale: maxByRow.map((e) => 1 / e),
  });

  return Object.assign(
    { matrix, times, mzAxis, rank },
    { profile: result.A, component: result.S },
  );
}
