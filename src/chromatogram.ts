import type { DoubleArray } from 'cheminfo-types';
import { xCheck, xFindClosestIndex } from 'ml-spectra-processing/x';

import type { ChromatogramSeries } from './chromatogram_series.ts';
import type { ChromatogramSeries1D } from './chromatogram_series_1d.ts';
import type { ChromatogramSeries2D } from './chromatogram_series_2d.ts';
import type { MeanFilterOptions } from './filter/mean_filter.ts';
import { meanFilter } from './filter/mean_filter.ts';
import type { PercentageFilterOptions } from './filter/percentage_filter.ts';
import { percentageFilter } from './filter/percentage_filter.ts';
import type {
  ApplyLockMassOptions,
  LockMassReferenceUsed,
} from './ms/apply_lock_mass.ts';
import { applyLockMass } from './ms/apply_lock_mass.ts';
import { calculateBpc } from './ms/calculate_bpc.ts';
import type { CalculateEicOptions } from './ms/calculate_eic.ts';
import { calculateEic } from './ms/calculate_eic.ts';
import type { CalculateForMFOptions } from './ms/calculate_for_mf.ts';
import { calculateForMF } from './ms/calculate_for_mf.ts';
import { calculateLength } from './ms/calculate_length.ts';
import { calculateTic } from './ms/calculate_tic.ts';
import type {
  DeconvolutionOptions,
  DeconvolutionResult,
} from './ms/deconvolution.ts';
import { deconvolution } from './ms/deconvolution.ts';
import type { MergeOptions, MergeResult } from './ms/merge.ts';
import { merge } from './ms/merge.ts';
import type { ChromatogramPeak, GetPeaksOptions } from './peaks/get_peaks.ts';
import { getPeaks } from './peaks/get_peaks.ts';
import { seriesFromArray } from './series_from_array.ts';
import type {
  CalculateOptions,
  ChromatogramRange,
  ChromatogramSeries1DData,
  ChromatogramSeries2DData,
  ChromatogramSeriesData,
} from './types.ts';
import type { FilterOptions } from './util/filter.ts';
import { filter } from './util/filter.ts';
import type { GetClosestDataOptions } from './util/get_closest_data.ts';
import { getClosestData } from './util/get_closest_data.ts';
import type { MzVsTimesMatrixResult } from './util/get_mz_vs_times_matrix.ts';
import { getMzVsTimesMatrix } from './util/get_mz_vs_times_matrix.ts';
import type { IntegrateOptions, IntegrateResult } from './util/integrate.ts';
import { integrate } from './util/integrate.ts';

interface ChromatogramInitOptions {
  meta?: Record<string, unknown>;
}

export interface AddSeriesOptions {
  /**
   * Force replacement of existing series.
   * If `false`, trying to add an already existing series will throw an error.
   * @default `false`
   */
  force?: boolean;

  meta?: Record<string, unknown>;
}

export class Chromatogram {
  times: DoubleArray;
  series: Record<
    string,
    ChromatogramSeries<ChromatogramSeries1DData | ChromatogramSeries2DData>
  >;
  meta: Record<string, unknown>;

  /**
   * Construct a new chromatogram.
   * @param times - Array of time points.
   * @param series - Dictionary of series.
   * @param options
   */
  constructor(
    times: DoubleArray,
    series?: Record<string, ChromatogramSeriesData>,
    options: ChromatogramInitOptions = {},
  ) {
    this.meta = options.meta || {};
    this.series = {};
    xCheck(times);
    this.times = times;
    if (series) {
      for (const [name, value] of Object.entries(series)) {
        this.addSeries(name, value);
      }
    }
  }

  /**
   * Returns the number of time points.
   */
  get length(): number {
    return this.times.length;
  }

  /**
   * Find the series from its name.
   * @param seriesName - Name of the series.
   */
  getSeries(seriesName: string): ChromatogramSeries {
    this.requiresSeries(seriesName);
    return this.series[seriesName];
  }

  /**
   * Find the series from its name.
   * Throws an error if it is not a 1D series.
   * @param seriesName - Name of the series.
   */
  getSeries1D(seriesName: string): ChromatogramSeries1D {
    const series = this.getSeries(seriesName);
    if (!series.is1D()) {
      throw new Error(`series "${seriesName}" is not a 1D series`);
    }
    return series;
  }

  /**
   * Find the series from its name.
   * Throws an error if it is not a 2D series.
   * @param seriesName - Name of the series.
   */
  getSeries2D(seriesName: string): ChromatogramSeries2D {
    const series = this.getSeries(seriesName);
    if (!series.is2D()) {
      throw new Error(`series "${seriesName}" is not a 2D series`);
    }
    return series;
  }

  /**
   * Returns the names of all series.
   */
  getSeriesNames(): string[] {
    return Object.keys(this.series);
  }

  /**
   * Returns whether the chromatogram has an "ms" series.
   */
  hasMass(): boolean {
    return this.hasSeries('ms');
  }

  /**
   * Delete a series.
   */
  deleteSeries(seriesName: string): this {
    this.requiresSeries(seriesName);
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete this.series[seriesName];
    return this;
  }

  /**
   * Add a new series.
   * @param seriesName - Name of the series to add.
   * @param data - Series data.
   * @param options
   */
  addSeries(
    seriesName: string,
    data: ChromatogramSeries1DData | ChromatogramSeries2DData,
    options: AddSeriesOptions = {},
  ): this {
    if (this.hasSeries(seriesName) && !options.force) {
      throw new Error(`A series with name "${seriesName}" already exists`);
    }
    if (this.times.length !== data.length) {
      throw new Error(`The series size is not the same as the times size`);
    }
    const series = seriesFromArray(data, options);
    this.series[seriesName] = series;
    series.name = seriesName;
    return this;
  }

  /**
   * Returns whether the series exists.
   * @param seriesName - Name of the series to check.
   */
  hasSeries(seriesName: string): boolean {
    return this.series[seriesName] !== undefined;
  }

  /**
   * Throws an error if the series does not exist.
   * @param seriesName - Name of the series to check.
   */
  requiresSeries(seriesName: string): void {
    if (!this.hasSeries(seriesName)) {
      throw new Error(`The series "${seriesName}" does not exist`);
    }
  }

  /**
   * Returns the first time value.
   */
  get firstTime(): number {
    return this.times[0];
  }

  /**
   * Returns the last time value.
   */
  get lastTime(): number {
    return this.times[this.length - 1];
  }

  /**
   * Returns the time values.
   */
  getTimes(): DoubleArray {
    return this.times;
  }

  /**
   * Assign the time values.
   * @param times - New time values.
   */
  setTimes(times: DoubleArray): this {
    if (times.length !== this.times.length) {
      throw new Error('New times must have the same length as the old ones');
    }
    this.times = times;
    return this;
  }

  /**
   * Modifies the time applying the conversion function.
   * @param conversionFunction
   */
  rescaleTime(conversionFunction: (time: number) => number): this {
    this.times = this.times.map((time) => conversionFunction(time));
    return this;
  }

  /**
   * Will filter the entries based on the index and time.
   * @param callback
   * @param options
   */
  filter(
    callback: (index: number, time: number) => boolean,
    options?: FilterOptions,
  ): Chromatogram {
    return filter(this, callback, options);
  }

  /**
   * Apply the GSD peak picking algorithm.
   * @param options
   * @returns - List of GSD objects
   */
  getPeaks(options?: GetPeaksOptions): ChromatogramPeak[] {
    return getPeaks(this, options);
  }

  /**
   * Calculate the "tic" series from the "ms" one.
   */
  calculateTic(options: CalculateOptions = {}): this {
    if (!this.hasSeries('tic') || options.force) {
      const tic = calculateTic(this);
      this.addSeries('tic', tic, { force: true });
    }

    return this;
  }

  /**
   * Calculate length (number of points of each related information) and save it in the "length" series.
   * @param seriesName - Name of the series to make calculation on. It must be a 2D series.
   * @param options
   */
  calculateLength(seriesName: string, options: CalculateOptions = {}): this {
    if (!this.hasSeries('length') || options.force) {
      const length = calculateLength(this, seriesName);
      this.addSeries('length', length, { force: true });
    }
    return this;
  }

  /**
   * Calculate the base peak chromatogram (BPC) and save it in the "bpc" series.
   * @param options
   */
  calculateBpc(options: CalculateOptions = {}): this {
    if (!this.hasSeries('bpc') || options.force) {
      const bpc = calculateBpc(this);
      this.addSeries('bpc', bpc, { force: true });
    }
    return this;
  }

  /**
   * Calculate the extracted ion chromatogram (EIC) and save it in a new series.
   * @param targetMass - Mass or masses for which to extract the spectrum.
   * @param options
   * @returns - The created series.
   */
  calculateEic(
    targetMass: number | number[] | string,
    options: CalculateEicOptions = {},
  ): ChromatogramSeries1D {
    const { slotWidth = 1 } = options;
    const {
      seriesName = `ms${String(targetMass)}±${slotWidth / 2 || 0.5}`,
      cache = false,
    } = options;
    if (cache && this.hasSeries(seriesName)) {
      return this.getSeries1D(seriesName);
    }
    const result = calculateEic(this, targetMass, options);
    this.addSeries(seriesName, result, options);
    return this.getSeries1D(seriesName);
  }

  /**
   * Calculate mass spectrum by filtering for a molecular formula.
   * @param targetMF - MF for which to extract the spectrum.
   * @param options
   * @returns - The created series.
   */
  async calculateForMF(
    targetMF: string,
    options: CalculateForMFOptions = {},
  ): Promise<ChromatogramSeries1D> {
    const { slotWidth = 1 } = options;
    const {
      seriesName = `${targetMF}(${options.ionizations || 'H+'})±${
        slotWidth / 2 || 0.5
      }${options.threshold ? `(${options.threshold})` : ''}`,
      cache = false,
    } = options;
    if (cache && this.hasSeries(seriesName)) {
      return this.getSeries1D(seriesName);
    }
    const result = await calculateForMF(this, targetMF, options);
    this.addSeries(seriesName, result, options);
    return this.getSeries1D(seriesName);
  }

  /**
   * Returns an array containing the integral of various ranges
   * @param ranges
   * @param options
   */
  integrate(
    ranges: ChromatogramRange[],
    options?: IntegrateOptions,
  ): IntegrateResult[] {
    return integrate(this, ranges, options);
  }

  /**
   * Returns a mass spectrum corresponding to the merge of a range.
   * @param options
   */
  merge(options?: MergeOptions): MergeResult {
    return merge(this, options);
  }

  /**
   * Returns the index of the closest real time to the specified one.
   * @param time - Retention time.
   * @returns - Time index.
   */
  getClosestTime(time: number): number {
    return xFindClosestIndex(this.getTimes(), time);
  }

  /**
   * Returns the closest mass spectrum to a specific retention time
   * @param time - Retention time
   * @param options
   */
  getClosestData<DataType extends ChromatogramSeriesData>(
    time: number,
    options?: GetClosestDataOptions,
  ) {
    return getClosestData<DataType>(this, time, options);
  }

  /**
   * Returns a copy of the chromatogram.
   */
  copy(): Chromatogram {
    const json = this.toJSON();
    return fromJSON(json);
  }

  /**
   * Filter the given 2D series based on its median value.
   * @param seriesName - Name of the series to filter.
   * @param options
   */
  meanFilter(
    seriesName: string,
    options: MeanFilterOptions = {},
  ): ChromatogramSeries2D {
    const { seriesName: newSeriesName = 'msMean' } = options;
    if (this.hasSeries(newSeriesName) && !options.force) {
      throw new Error(`A series with name "${seriesName}" already exists`);
    }
    const newSeries = meanFilter(this, seriesName, options);
    this.series[newSeriesName] = newSeries;
    return newSeries;
  }

  /**
   * Filter the given 2D series based on the percentage of the highest value
   * @param seriesName - Name of the series to filter.
   * @param options
   */
  percentageFilter(
    seriesName: string,
    options: PercentageFilterOptions = {},
  ): ChromatogramSeries2D {
    const { seriesName: newSeriesName = 'msPercentage' } = options;
    if (this.hasSeries(newSeriesName) && !options.force) {
      throw new Error(`A series with name "${seriesName}" already exists`);
    }
    const newSeries = percentageFilter(this, seriesName, options);
    this.series[newSeriesName] = newSeries;
    return newSeries;
  }

  /**
   * Recalculates series for GC/MS with lock mass.
   * @param mfs - Reference molecular formula(s).
   * @param options
   */
  applyLockMass(
    mfs: string | string[],
    options?: ApplyLockMassOptions,
  ): LockMassReferenceUsed {
    return applyLockMass(this, mfs, options);
  }

  /**
   * Return the submatrix, times, and mass x axis for each range
   */
  getMzVsTimesMatrix(range: ChromatogramRange): MzVsTimesMatrixResult {
    return getMzVsTimesMatrix(this, range);
  }

  /**
   * Performing non-negative matrix factorization solving
   * argmin_(A >= 0, S >= 0) 1 / 2 * ||Y - AS||_2^2 + lambda * ||S||_1
   */
  deconvolution(options: DeconvolutionOptions): DeconvolutionResult {
    return deconvolution(this, options);
  }

  /**
   * Returns a serializable representation of the chromatogram.
   */
  toJSON() {
    return {
      times: Array.from(this.times),
      series: Object.fromEntries(
        Object.entries(this.series).map(([name, series]) => [
          name,
          series.toJSON(),
        ]),
      ),
    };
  }
}

/**
 * Create a Chromatogram from a JSON representation.
 * @param json
 */
export function fromJSON(json: unknown): Chromatogram {
  const { series, times, meta = {} } = json as any;
  const chromatogram = new Chromatogram(times, undefined, { meta });

  if (Array.isArray(series)) {
    for (const serie of series) {
      chromatogram.addSeries(serie.name, serie.data, {
        meta: serie.meta,
      });
    }
  } else {
    for (const key of Object.keys(series)) {
      chromatogram.addSeries(key, series[key].data, {
        meta: series[key].meta,
      });
    }
  }
  return chromatogram;
}
