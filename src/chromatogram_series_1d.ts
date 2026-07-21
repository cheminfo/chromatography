import type { ChromatogramSeriesOptions } from './chromatogram_series.ts';
import { ChromatogramSeries } from './chromatogram_series.ts';
import type { ChromatogramSeries1DData } from './types.ts';

export class ChromatogramSeries1D extends ChromatogramSeries<ChromatogramSeries1DData> {
  constructor(
    array: ChromatogramSeries1DData,
    options?: ChromatogramSeriesOptions,
  ) {
    super(array, 1, options);
  }

  protected dataToJson() {
    return Array.from(this.getData());
  }
}
