import { xMaxValue } from 'ml-spectra-processing/x';

import type { Chromatogram } from '../chromatogram.ts';
import type { ChromatogramSeries2D } from '../chromatogram_series_2d.ts';
import { seriesFromArray } from '../series_from_array.ts';
import type { ChromatogramSeries2DDataElement } from '../types.ts';

export interface PercentageFilterOptions {
  /**
   * @default `0.1`
   */
  percentage?: number;

  /**
   * Name of the created series.
   * @default `'msPercentage'`
   */
  seriesName?: string;

  /**
   * Force replacement of existing series.
   * If `false`, trying to add an already existing series will throw an error.
   * @default `false`
   */
  force?: boolean;
}

export function percentageFilter(
  chromatogram: Chromatogram,
  seriesName: string,
  options: PercentageFilterOptions = {},
): ChromatogramSeries2D {
  const { percentage = 0.1 } = options;

  const series = chromatogram.getSeries2D(seriesName);
  const filtered = [];

  const data = series.getData();

  for (const item of data) {
    filtered.push(applyFilter(item, percentage));
  }

  return seriesFromArray(filtered) as ChromatogramSeries2D;
}

function applyFilter(
  series: ChromatogramSeries2DDataElement,
  percentage: number,
) {
  let basePeak;
  try {
    basePeak = xMaxValue(series[1]);
  } catch {
    basePeak = 0;
  }
  const filtered: ChromatogramSeries2DDataElement<number[]> = [[], []];
  for (let i = 0; i < series[0].length; i++) {
    if (series[1][i] > percentage * basePeak) {
      filtered[0].push(series[0][i]);
      filtered[1].push(series[1][i]);
    }
  }
  return filtered;
}
