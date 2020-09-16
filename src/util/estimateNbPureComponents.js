import { PCA } from 'ml-pca';

/**
 * Estimate the number of pure components of each range by NIPALS PCA
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the estimation
 * @param {Array<Object>} ranges - List of ranges with from to and optional the sub matrix
 * @return {Array<Number>} - List of number of estimated pure components
 */

export function estimateNbPureComponents(chromatogram, ranges) {
  let ranks = [];
  for (let p = 0; p < ranges.length; p++) {
    let matrix;
    let data = ranges[p];
    if (data.matrix) {
      matrix = data.matrix;
    } else {
      let result = chromatogram.getMatrix([data]);
      matrix = result[0].matrix;
    }
    let pca = new PCA(matrix, {
      method: 'NIPALS',
      nCompNIPALS: 10,
      scale: true,
      ignoreZeroVariance: true,
    });
    let s = pca.getExplainedVariance();
    let i = 1;
    let cumulative = s[0];
    for (; i < s.length; i++) {
      cumulative += s[i];
      let value = (cumulative - s[i]) / cumulative;
      if (value > 0.88) {
        break;
      }
    }
    ranks.push(i);
  }
  return ranks;
}
