import { nGMCA } from 'ml-ngmca';

import { estimateNbPureComponents } from '../util/estimateNbPureComponents';

/**
 * Performing non-negative matrix factorization solving argmin_(A >= 0, S >= 0) 1 / 2 * ||Y - AS||_2^2 + lambda * ||S||_1
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the estimation.
 * @param {Object} [options = {}] - Options of ngmca factorization method
 * @param {Number} [options.rank] - number of pure components, if it's undefined it will be estimated by explained variance of PCA.
 * @param {Object} [options.range] - Range with from to.
 * @param {Number} [options.range.from] - lower limit in the retention time.
 * @param {Number} [options.range.to] - upper limit in the retention time.
 * @param {Number} [options.nmfOptions = {}] - options to Non negative factorization (deconvolution method).
 * @param {Number} [options.nmfOptions.maximumIteration = 500] - Maximum number of iterations.
 * @param {Number} [options.nmfOptions.maxFBIteration = 80] - Maximum number of iterations of the Forward-Backward subroutine.
 * @param {Number} [options.nmfOptions.toleranceFB = 1e-5] - relative difference tolerance for convergence of the Forward-Backward sub-iterations.
 * @param {Number} [options.nmfOptions.phaseRatio = 0.8] - transition between decreasing thresholding phase and refinement phase in percent of the iterations.
 * @param {Boolean} [options.useTranspose = false] - if true the originalMatrix is transposed.
 */

export function deconvolution(chromatogram, options = {}) {
  let { range, rank, nmfOptions = {} } = options;
  let { matrix, mzAxis, times } = chromatogram.getMzVsTimesMatrix(range);

  if (!rank) rank = estimateNbPureComponents(chromatogram, { range, matrix });

  if (rank < 1) {
    throw new RangeError(
      `Rank should be a positive number for ${range.from} - ${range.to}`,
    );
  }

  let result = nGMCA(matrix, rank, nmfOptions);
  let maxByRow = [];
  for (let i = 0; i < result.S.rows; i++) {
    maxByRow.push(result.S.maxRow(i));
  }

  result.S.scale('row', { scale: maxByRow });
  result.A.scale('column', {
    scale: maxByRow.map((e) => 1 / e),
  });

  return {
    matrix,
    times,
    mzAxis,
    rank,
    profile: result.A,
    component: result.S,
  };
}
