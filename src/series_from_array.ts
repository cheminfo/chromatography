import type { AnyArray } from 'is-any-array';
import { isAnyArray } from 'is-any-array';

import { ChromatogramSeries1D } from './chromatogram_series_1d.ts';
import { ChromatogramSeries2D } from './chromatogram_series_2d.ts';
import type {
  ChromatogramSeries1DData,
  ChromatogramSeries2DData,
} from './types.ts';

export function seriesFromArray(
  array: AnyArray,
  options?: { meta?: Record<string, unknown> },
) {
  if (!isAnyArray(array)) {
    throw new TypeError(
      'seriesFromArray requires as parameter an array of numbers or arrays',
    );
  }

  if (typeof array[0] === 'number') {
    return new ChromatogramSeries1D(array as ChromatogramSeries1DData, options);
  }

  if (
    !isAnyArray(array[0]) ||
    !isAnyArray(array[0][0]) ||
    !isAnyArray(array[0][1])
  ) {
    throw new TypeError(
      'seriesFromArray requires as parameter an array of numbers or array',
    );
  }

  return new ChromatogramSeries2D(array as ChromatogramSeries2DData, options);
}
