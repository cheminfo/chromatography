import type { Matrix } from 'ml-matrix';
import { PCA } from 'ml-pca';

import type { Chromatogram } from '../chromatogram.ts';
import type { ChromatogramRange } from '../types.ts';

interface EstimateNbPureComponentsOptions {
  /**
   * Range of retention times.
   */
  range: ChromatogramRange;
  /**
   * Matrix to compute the number of pure components. If it does not exist it, will be computed from the chromatogram.
   */
  matrix?: Matrix;
}

/**
 * Estimate the number of pure components of each range by NIPALS PCA.
 * @param chromatogram - GC/MS chromatogram where make the estimation.
 * @param options - Options with range and the matrix.
 */
export function estimateNbPureComponents(
  chromatogram: Chromatogram,
  options: EstimateNbPureComponentsOptions,
): number {
  const { range } = options;
  let { matrix } = options;

  if (!matrix) matrix = chromatogram.getMzVsTimesMatrix(range).matrix;

  const pca = new PCA(matrix, {
    method: 'NIPALS',
    nCompNIPALS: 10,
    scale: true,
    ignoreZeroVariance: true,
  });
  const s = pca.getExplainedVariance();
  let rank = 1;
  let cumulative = s[0];
  while ((cumulative - s[rank]) / cumulative < 0.88 && rank < s.length) {
    cumulative += s[rank];
    rank++;
  }
  return rank;
}
