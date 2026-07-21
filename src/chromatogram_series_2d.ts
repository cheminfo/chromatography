import type { ChromatogramSeriesOptions } from './chromatogram_series.ts';
import { ChromatogramSeries } from './chromatogram_series.ts';
import type { ChromatogramSeries2DData } from './types.ts';

export class ChromatogramSeries2D extends ChromatogramSeries<ChromatogramSeries2DData> {
  constructor(
    array: ChromatogramSeries2DData,
    options?: ChromatogramSeriesOptions,
  ) {
    super(array, 2, options);
  }

  protected dataToJson(): ChromatogramSeries2DData {
    return this.getData().map(([masses, intensities]) => [
      Array.from(masses),
      Array.from(intensities),
    ]);
  }
}
