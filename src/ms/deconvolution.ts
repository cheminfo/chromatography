import type { DoubleArray } from 'cheminfo-types';
import type { Matrix } from 'ml-matrix';
// @ts-expect-error This package is not typed.
import { nGMCA } from 'ml-ngmca';

import type { Chromatogram } from '../chromatogram.ts';
import type { ChromatogramRange } from '../types.ts';
import { estimateNbPureComponents } from '../util/estimate_nb_pure_components.ts';

export interface NmfOptions {
  /**
   * Maximum number of iterations
   * @default 500
   */
  maximumIteration?: number;
  /**
   * Maximum number of iterations of the Forward-Backward subroutine.
   * @default 80
   */
  maxFBIteration?: number;
  /**
   * Relative difference tolerance for convergence of the Forward-Backward sub-iterations.
   * @default 1e-5
   */
  toleranceFB?: number;
  /**
   * Transition between decreasing thresholding phase and refinement phase in percent of the iterations.
   * @default 0.8
   */
  phaseRatio?: number;
  /**
   * If true the originalMatrix is transposed.
   * @default false
   */
  useTranspose?: boolean;
}

export interface DeconvolutionOptions {
  /**
   * Number of pure components.
   * If it's undefined, it will be estimated by explained variance of PCA.
   */
  rank?: number;

  /**
   * Range with from to.
   */
  range: ChromatogramRange;

  /**
   * Options to non-negative factorization (deconvolution method).
   */
  nmfOptions?: NmfOptions;
}

export interface DeconvolutionResult {
  /**
   * submatrix, times and m/z axis of the range
   */
  matrix: Matrix;
  /**
   * vector with retention times of the range
   */
  times: DoubleArray;
  /**
   * vector with m/z value of the range
   */
  mzAxis: number[];
  /**
   * number of pure components
   */
  rank: number;
  /**
   * Matrix with columns as composition profile
   */
  profile: Matrix;
  /**
   * Matrix with row as estimated pure components
   */
  component: Matrix;
}

/**
 * Performing non-negative matrix factorization solving argmin_(A >= 0, S >= 0) 1 / 2 * ||Y - AS||_2^2 + lambda * ||S||_1
 * @param chromatogram - GC/MS chromatogram where make the estimation.
 * @param options - Options of ngmca factorization method
 */
export function deconvolution(
  chromatogram: Chromatogram,
  options: DeconvolutionOptions,
): DeconvolutionResult {
  let { rank } = options;
  const { range, nmfOptions = {} } = options;
  const { matrix, mzAxis, times } = chromatogram.getMzVsTimesMatrix(range);

  if (!rank) rank = estimateNbPureComponents(chromatogram, { range, matrix });

  if (rank < 1) {
    throw new RangeError(
      `Rank should be a positive number for ${range.from} - ${range.to}`,
    );
  }

  const result = nGMCA(matrix, rank, nmfOptions);
  const maxByRow = [];
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
