import { PCA } from 'ml-pca';

/**
 * Estimate the number of pure components of each range by NIPALS PCA
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the estimation
 * @param {Object} options - options with range and the matrix
 * @param {Object} [options.range] - Range of retention times.
 * @param {Number} [options.range.from] - lower limit in the retention time.
 * @param {Number} [options.range.to] - upper limit in the retention time.
 * @param {Array<Array>} [options.matrix] - matrix to compute the number of pure components, if does not exist it will be computed.
 */

export function estimateNbPureComponents(chromatogram, options = {}) {
  let { range, matrix } = options;

  if (!matrix) matrix = chromatogram.getMzVsTimesMatrix(range).matrix;

  let pca = new PCA(matrix, {
    method: 'NIPALS',
    nCompNIPALS: 10,
    scale: true,
    ignoreZeroVariance: true,
  });
  let s = pca.getExplainedVariance();
  let rank = 1;
  let cumulative = s[0];
  while ((cumulative - s[rank]) / cumulative < 0.88 && rank < s.length) {
    cumulative += s[rank];
    rank++;
  }
  return rank;
}
