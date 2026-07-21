import { xGetFromToIndex } from 'ml-spectra-processing/x';
import { xySortX } from 'ml-spectra-processing/xy';
import { xyArrayWeightedMerge } from 'ml-spectra-processing/xyArray';

import type { Chromatogram } from '../chromatogram.ts';
import type { ChromatogramRange } from '../types.ts';

export interface MergeOptions {
  /**
   * Range to merge.
   */
  range?: ChromatogramRange;

  /**
   * Name of the mass series.
   * @default 'ms'
   */
  seriesName?: string;

  /**
   * Parameter for merging the peaks.
   * Peaks that are closer than this value (in Da) will be merged.
   * @default 0.3
   */
  mergeThreshold?: number;
}

export interface MergeResult {
  x: number[];
  y: number[];
  from: {
    index: number;
    time: number;
  };
  to: {
    index: number;
    time: number;
  };
}

export function merge(
  chromatogram: Chromatogram,
  options: MergeOptions = {},
): MergeResult {
  const { mergeThreshold = 0.3, seriesName = 'ms', range } = options;

  const times = chromatogram.getTimes();

  const series = chromatogram.getSeries2D(seriesName);

  if (
    range &&
    (range.from > chromatogram.lastTime || range.to < chromatogram.firstTime)
  ) {
    return {
      x: [],
      y: [],
      from: { index: -1, time: 0 },
      to: { index: -1, time: 0 },
    };
  }

  const { fromIndex, toIndex } = xGetFromToIndex(times, range);

  const data = series
    .getData()
    .slice(fromIndex, toIndex + 1)
    .map((datum) => xySortX({ x: datum[0], y: datum[1] }));

  const { x, y } = xyArrayWeightedMerge(data, { delta: mergeThreshold });

  return {
    x,
    y,
    from: {
      index: fromIndex,
      time: times[fromIndex],
    },
    to: {
      index: toIndex,
      time: times[toIndex],
    },
  };
}
