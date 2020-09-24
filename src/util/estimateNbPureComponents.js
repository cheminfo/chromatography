import { PCA } from 'ml-pca';

/**
 * Estimate the number of pure components of each range by NIPALS PCA
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the estimation
 * @param {Object} range - Range with from to and optional the sub-matrix
 * @param {Number} [range.from] - lower limit in the retention time
 * @param {Number} [range.to] - upper limit in the retention time
 * @param {Array<Array>} [range.matrix] - sub-matrix of the range, if does not exist it will be computed.
 * @return {<Number>} - Number of estimated pure components
 */

export function estimateNbPureComponents(chromatogram, range) {
  let matrix = range.matrix || chromatogram.getMatrix(range).matrix;
  let pca = new PCA(matrix, {
    method: 'NIPALS',
    nCompNIPALS: 10,
    scale: true,
    ignoreZeroVariance: true,
  });
  let s = pca.getExplainedVariance();
  let rank = 1;
  let cumulative = s[0];
  for (; rank < s.length; rank++) {
    cumulative += s[rank];
    let value = (cumulative - s[rank]) / cumulative;
    if (value > 0.88) {
      break;
    }
  }
  return rank;
}
