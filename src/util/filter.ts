import type { Chromatogram } from '../chromatogram.ts';

export interface FilterOptions {
  /**
   * Whether the method should return a copy of the chromatogram or modify it in-place.
   * @default `false`
   */
  copy?: boolean;
}

export function filter(
  chromatogram: Chromatogram,
  callback: (index: number, time: number) => boolean,
  options: FilterOptions = {},
) {
  const { copy = false } = options;
  if (copy) {
    chromatogram = chromatogram.copy();
  }

  const times = chromatogram.getTimes();
  const newTimes = [];
  const indexToKeep = [];
  for (let i = 0; i < times.length; i++) {
    if (callback(i, times[i])) {
      indexToKeep.push(i);
      newTimes.push(times[i]);
    }
  }
  chromatogram.times = newTimes;

  for (const key of chromatogram.getSeriesNames()) {
    const series = chromatogram.getSeries(key);
    series.keep(indexToKeep);
  }

  return chromatogram;
}
