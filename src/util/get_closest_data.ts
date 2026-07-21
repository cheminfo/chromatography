import type { Chromatogram } from '../chromatogram.ts';
import type { ChromatogramSeriesData } from '../types.ts';

export interface GetClosestDataOptions {
  /**
   * Name of the mass series.
   * @default 'ms'
   */
  seriesName?: string;
}

export interface GetClosestDataResult<DataType extends ChromatogramSeriesData> {
  rt: number;
  index: number;
  data: DataType[number];
}

export function getClosestData<DataType extends ChromatogramSeriesData>(
  chromatogram: Chromatogram,
  time: number,
  options: GetClosestDataOptions = {},
): GetClosestDataResult<DataType> {
  const { seriesName = 'ms' } = options;
  chromatogram.requiresSeries(seriesName);
  const closest = chromatogram.getClosestTime(time);
  return {
    rt: chromatogram.getTimes()[closest],
    index: closest,
    data: chromatogram.getSeries(seriesName).getData()[closest],
  };
}
