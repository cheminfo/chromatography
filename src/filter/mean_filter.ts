import { xMean } from 'ml-spectra-processing/x';

import type { Chromatogram } from '../chromatogram.ts';
import type { ChromatogramSeries2D } from '../chromatogram_series_2d.ts';
import { seriesFromArray } from '../series_from_array.ts';
import type { ChromatogramSeries2DDataElement } from '../types.ts';

export interface MeanFilterOptions {
  /**
   * The values under the median times this factor are removed.
   * @default `2`
   */
  factor?: number;

  /**
   * Name of the created series.
   * @default `'msMean'`
   */
  seriesName?: string;

  /**
   * Force replacement of existing series.
   * If `false`, trying to add an already existing series will throw an error.
   * @default `false`
   */
  force?: boolean;
}

export function meanFilter(
  chromatogram: Chromatogram,
  seriesName: string,
  options: MeanFilterOptions = {},
): ChromatogramSeries2D {
  const { factor = 2 } = options;

  const series = chromatogram.getSeries2D(seriesName);
  const filtered = [];
  const data = series.getData();
  for (const datum of data) {
    filtered.push(applyFilter(datum, factor));
  }

  return seriesFromArray(filtered) as ChromatogramSeries2D;
}

function applyFilter(series: ChromatogramSeries2DDataElement, factor: number) {
  const filtered: ChromatogramSeries2DDataElement<number[]> = [[], []];
  if (series[1].length === 0) return filtered;
  const meanIntensity = factor * xMean(series[1]);
  for (let i = 0; i < series[0].length; i++) {
    if (series[1][i] > meanIntensity) {
      filtered[0].push(series[0][i]);
      filtered[1].push(series[1][i]);
    }
  }
  return filtered;
}
