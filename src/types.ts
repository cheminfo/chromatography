import type { DoubleArray } from 'cheminfo-types';

export type ChromatogramSeries1DDataElement = number;
export type ChromatogramSeries1DData = DoubleArray;
export type ChromatogramSeries2DDataElement<
  ElementType extends DoubleArray = DoubleArray,
> = [masses: ElementType, intensities: ElementType];
export type ChromatogramSeries2DData = ChromatogramSeries2DDataElement[];

export type ChromatogramSeriesData =
  ChromatogramSeries1DData | ChromatogramSeries2DData;

/**
 * Chromatographic range, in retention time units.
 */
export interface ChromatogramRange {
  /**
   * First retention time of the range (inclusive)
   */
  from: number;

  /**
   * Last retention time of the range (exclusive)
   */
  to: number;
}

export interface CalculateOptions {
  /**
   * Force the calculation if it already exists.
   * If `false`, calling the method more than once will have no effect.
   * @default `false`
   */
  force?: boolean;
}
