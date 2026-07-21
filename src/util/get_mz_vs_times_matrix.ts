import type { DoubleArray } from 'cheminfo-types';
import { Matrix } from 'ml-matrix';
import { xFindClosestIndex } from 'ml-spectra-processing/x';

import type { Chromatogram } from '../chromatogram.ts';
import type { ChromatogramRange } from '../types.ts';

export interface MzVsTimesMatrixResult {
  times: DoubleArray;
  mzAxis: number[];
  matrix: Matrix;
}

/**
 * Return the submatrix, times, and mass X axis for each range.
 * @param chromatogram
 * @param range - from - to of the TIC
 * @returns submatrix, times and m/z axis of the range.
 */
export function getMzVsTimesMatrix(
  chromatogram: Chromatogram,
  range: ChromatogramRange,
): MzVsTimesMatrixResult {
  const { from, to } = range;
  const fromIndex = chromatogram.getClosestTime(from);
  const toIndex = chromatogram.getClosestTime(to);

  const msSeries = chromatogram.getSeries2D('ms');
  const data = msSeries.getData().slice(fromIndex, toIndex);
  const times = chromatogram.times.slice(fromIndex, toIndex);

  const mzAxisSet = new Set<number>();
  for (const spectrum of data) {
    for (const value of spectrum[0]) {
      mzAxisSet.add(Math.round(value));
    }
  }
  const mzAxis = Array.from(mzAxisSet);
  mzAxis.sort((a, b) => a - b);
  const nbPoints = mzAxis.length;
  const matrix = new Matrix(data.length, nbPoints);
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    for (let j = 0; j < element[0].length; j++) {
      const xValue = Math.round(element[0][j]);
      const index = xFindClosestIndex(mzAxis, xValue);
      matrix.set(i, index, element[1][j]);
    }
  }
  return { times, mzAxis, matrix };
}
