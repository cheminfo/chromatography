export abstract class ChromatogramSeries<DataType> {
  getData(): DataType;
  is1D(): boolean;
  is2D(): boolean;
  toJSON(): {
    data: DataType;
    meta?: object;
  };

  /**
   * Specify an array of indexes to keep.
   * @param array
   */
  keep(array: number[]): this;
}

export class ChromatogramSeries1D extends ChromatogramSeries<number[]> {}
export class ChromatogramSeries2D extends ChromatogramSeries<number[][]> {}

export type ChromatogramSeriesData = number[] | number[][];

export interface ChromatogramRange {
  from: number;
  to: number;
}

export interface ChromatogramPeak {
  x: number;
  y: number;
}

export interface AddSeriesOptions {
  /**
   * Force replacement of existing series.
   * If `false`, trying to add an already existing series will throw an error.
   * @default `false`
   */
  force?: boolean;
}

export interface FilterOptions {
  /**
   * Whether the method should return a copy of the chromatogram or modify it in-place.
   * @default `false`
   */
  copy?: boolean;
}

export interface GetPeaksOptions {
  /**
   * Filter all objects that are below `heightFilter` times the median of the height.
   * @default: `2`
   */
  heightFilter?: number;

  /**
   * Series to do the peak picking on
   * @default `'tic'`
   */
  seriesName?: string;
}

export interface GSDObject {
  from: number;
  to: number;
  fromIndex: number;
  toIndex: number;
  x: number;
  y: number;
  index: number;
}

export interface CalculateOptions {
  /**
   * Force the calculation if it already exists.
   * If `false`, calling the method more than once will have no effect.
   * @default `false`
   */
  force?: boolean;
}

export interface CalculateForMassOptions {
  /**
   * Name of the series where the result will be stored.
   * Defaults to an automatically generated name.
   */
  seriesName?: string;

  /**
   * Retrieve result from cache if it exists.
   * @default `false`
   */
  cache?: boolean;

  /**
   * Force replacement of existing series.
   * If `false`, trying to add an already existing series will throw an error.
   * @default `false`
   */
  force?: boolean;

  /**
   * Width of the slot around the target mass.
   * @default `1`
   */
  slotWidth?: number;
}

export interface CalculateForMFOptions {
  /**
   * Name of the series where the result will be stored.
   * Defaults to an automatically generated name.
   */
  seriesName?: string;

  /**
   * Retrieve result from cache if it exists.
   * @default `false`
   */
  cache?: boolean;

  /**
   * Force replacement of existing series.
   * If `false`, trying to add an already existing series will throw an error.
   * @default `false`
   */
  force?: boolean;

  /**
   * Width of the slot around the mass of `targetMF`.
   * @default `1`
   */
  slotWidth?: number;

  /**
   * Minimal height for peaks.
   * @default `0.5`
   */
  threshold?: number;

  /**
   * List of allowed ionisations.
   * @default `'H+'`
   */
  ionizations?: string;
}

export interface IntegrateOptions {
  /**
   * Name of the chromatogram series to use.
   * @default `'tic'`
   */
  seriesName?: string;

  /**
   * Apply the specified baseline correction.
   */
  baseline?: 'trapezoid' | 'min';
}

export interface IntegrateResult {
  integration: number;
  from: {
    time: number;
    index: number;
    baseline: number;
  };
  to: {
    time: number;
    index: number;
    baseline: number;
  };
}

export interface MergeOptions {
  /**
   * Range to merge.
   */
  range?: ChromatogramRange;

  /**
   * Name of the mass series.
   * @default `'ms'`
   */
  seriesName?: string;

  /**
   * Parameter for merging the peaks
   * @default `0.3`
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

export interface GetClosestDataOptions {
  /**
   * Name of the mass series
   * @default `'ms'`
   */
  seriesName?: string;
}

export interface GetClosestDataResult<DataType> {
  rt: number;
  index: number;
  data: DataType;
}

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

export interface ApplyLockMassOptions {
  /**
   * Whether the reference is in the odd position.
   * @default `true`
   */
  oddReference?: boolean;

  /**
   * Maximum allowed shift
   * @default `0.1`
   */
  maxShift?: number;
}

export interface LockMassReferenceUsed {
  total: number;
  totalFound: number;
  percent: number;
  mfs: { [mf: string]: number };
}

export class Chromatogram {
  /**
   * @param times - Array of time points.
   * @param series - Dictionary of series.
   */
  constructor(
    times: number[],
    series: { [key: string]: ChromatogramSeriesData },
  );

  /**
   * Returns the number of time points.
   */
  get length(): number;

  /**
   * Find the series from its name.
   * @param seriesName - Name of the series.
   */
  getSeries(seriesName: string): ChromatogramSeries<number[] | number[][]>;

  /**
   * Find the series from its name.
   * Throws an error if it is not a 1D series.
   * @param seriesName: string): Name of the series.
   */
  getSeries1D(seriesName: string): ChromatogramSeries1D;

  /**
   * Find the series from its name.
   * Throws an error if it is not a 2D series.
   * @param seriesName: string): Name of the series.
   */
  getSeries2D(seriesName: string): ChromatogramSeries2D;

  /**
   * Returns the names of all series.
   */
  getSeriesNames(): string[];

  /**
   * Returns whether the chromatogram has an "ms" series.
   */
  hasMass(): boolean;

  /**
   * Delete a series.
   */
  deleteSeries(seriesName: string): this;

  /**
   * Add a new series.
   * @param seriesName - Name of the series to add.
   * @param data - Series data.
   */
  addSeries(
    seriesName: string,
    data: ChromatogramSeriesData,
    options?: AddSeriesOptions,
  ): this;

  /**
   * Returns whether the series exists.
   * @param seriesName - Name of the series to check.
   */
  hasSeries(seriesName: string): boolean;

  /**
   * Throws an error if the series does not exist.
   * @param seriesName - Name of the series to check.
   */
  requiresSeries(seriesName: string): void;

  /**
   * Returns the first time value.
   */
  get firstTime(): number;

  /**
   * Returns the last time value.
   */
  get lastTime(): number;

  /**
   * Returns the time values.
   */
  getTimes(): number[];

  /**
   * Assign the time values.
   * @param times - New time values.
   */
  setTimes(times: number[]): this;

  /**
   * Modifies the time applying the conversion function.
   * @param conversionFunction
   */
  rescaleTime(conversionFunction: (time: number) => number): this;

  /**
   * Will filter the entries based on the index and time.
   * @param options
   */
  filter(
    callback: (index: number, time: number) => boolean,
    options?: FilterOptions,
  ): Chromatogram;

  /**
   * Apply the GSD peak picking algorithm.
   * @param options
   * @returns - List of GSD objects
   */
  getPeaks(options?: GetPeaksOptions): GSDObject[];

  /**
   * Calculate the "tic" series from the "ms" one.
   */
  calculateTic(options?: CalculateOptions): this;

  /**
   * Calculate length (number of points of each related information) and save it in the "length" series.
   * @param seriesName - Name of the series to make calculation on. It must be a 2D series.
   * @param options
   */
  calculateLength(seriesName: string, options?: CalculateOptions): this;

  /**
   * Calculate the base peak chromatogram (BPC) and save it in the "bpc" series.
   * @param options
   */
  calculateBpc(options?: CalculateOptions): this;

  /**
   * Calculate the extracted ion chromatogram (EIC) and save it in a new series.
   * @param targetMass - Mass or masses for which to extract the spectrum.
   * @param options
   * @returns - The created series.
   */
  calculateEic(
    targetMass: number | number[],
    options?: CalculateForMassOptions,
  ): ChromatogramSeries1D;

  /**
   * Calculate mass spectrum by filtering for a molecular formula.
   * @param targetMF - MF for which to extract the spectrum.
   * @param options
   * @returns - The created series.
   */
  calculateForMF(
    targetMF: string,
    options?: CalculateForMFOptions,
  ): ChromatogramSeries1D;

  /**
   * Returns an array containing the integral of various ranges
   * @param ranges
   * @param options
   */
  integrate(
    ranges: ChromatogramRange[],
    options?: IntegrateOptions,
  ): IntegrateResult[];

  /**
   * Returns a mass spectrum corresponding to the merge of a range.
   * @param options
   */
  merge(options?: MergeOptions): MergeResult;

  /**
   * Returns the index of the closest real time to the specified one.
   * @param time - Retention time.
   * @returns - Time index.
   */
  getClosestTime(time: number): number;

  /**
   * Returns the closest mass spectrum to a specific retention time
   * @param time - Retention time
   */
  getClosestData(
    time: number,
    options?: GetClosestDataOptions,
  ): GetClosestDataResult;

  /**
   * Returns a copy of the chromatogram.
   */
  copy(): Chromatogram;

  /**
   * Filter the given 2D series based on it's median value.
   * @param seriesName - Name of the series to filter.
   * @param options
   */
  meanFilter(
    seriesName: string,
    options?: MeanFilterOptions,
  ): ChromatogramSeries2D;

  /**
   * Filter the given 2D series based on the percentage of the highest value
   * @param seriesName - Name of the series to filter.
   * @param options
   */
  percentageFilter(
    seriesName: string,
    options?: PercentageFilterOptions,
  ): ChromatogramSeries2D;

  /**
   * Recalculates series for GC/MS with lock mass.
   * @param mfs - Reference molecular formula(s).
   * @param options
   */
  applyLockMass(
    mfs: string | string[],
    options?: ApplyLockMassOptions,
  ): LockMassReferenceUsed;

  /**
   * Returns a serializable representation of the chromatogram.
   */
  toJSON(): {
    times: number[];
    series: { [key: string]: { data: ChromatogramSeriesData; meta?: object } };
  };
}

export interface FromJSONObject {
  times: number[];
  series:
    | { name: string; data: ChromatogramSeriesData }[]
    | { [key: string]: { data: ChromatogramSeriesData; meta?: object } };
}

/**
 * Create a Chromatogram from a JSON representation.
 * @param json
 */
export function fromJSON(json: FromJSONObject): Chromatogram;

export interface AppendMassOptions extends MergeOptions {}

export interface AppendMassResult extends ChromatogramRange {
  ms: MergeResult;
}

/**
 * Append MS spectra to a list of peaks.
 * @param chromatogram
 * @param peaks - Array of peaks.
 * @param options
 * @returns A copy of ranges with ms appended.
 */
export function appendMass(
  chromatogram: Chromatogram,
  peaks: ChromatogramRange[],
  options?: AppendMassOptions,
): AppendMassResult[];

export interface VectorifyOptions {
  /**
   * Power applied to the mass values.
   * @default `3`
   */
  massPower?: number;

  /**
   * Power applied to the abundance values.
   * @default `0.6`
   */
  intPower?: number;

  /**
   * Every peak that is below the main peak times this factor fill be removed (when it is 0, there's no filter).
   * @default `0`
   */
  thresholdFactor?: number;

  /**
   * Maximum number of peaks for each mass spectrum (when it is Number.MAX_VALUE, there's no filter).
   * @default `Number.MAX_VALUE`
   */
  maxNumberPeaks?: number;

  /**
   * When find a max can't be another max in a radius of this size.
   * @default `0`
   */
  groupWidth?: number;
}

export interface MassSpectrum {
  /**
   * Array of mass values.
   */
  x: number[];

  /**
   * Array of abundance values.
   */
  y: number[];
}

/**
 * Given a list of ranges with ms, returns the weighted mass times abundance.
 * @param ranges
 * @param options
 * @returns List of mass and weighted mass times abundance objects
 */
export function vectorify(
  ranges: AppendMassResult[],
  options?: VectorifyOptions,
): MassSpectrum[];

export interface GetKovatsConversionFunctionOptions {
  /**
   * If `true`, the function will convert from Kovats to time.
   * If `false`, the function will convert from time to Kovats.
   * @default `false`
   */
  revert?: boolean;
}

/**
 * Returns a function that can convert from time to Kovats or from Kovats to time.
 * @param peaks - List of time-kovats reference peaks.
 * @param options
 */
export function getKovatsConversionFunction(
  peaks: { time: number; kovats: { index: number } }[],
  options?: GetKovatsConversionFunctionOptions,
): (value: number) => number;

export interface MassFilterOptions {
  /**
   * Every peak that is below the main peak times this factor fill be removed (when it is 0, there's no filter).
   * @default `0`
   */
  thresholdFactor?: number;

  /**
   * Maximum number of peaks for each mass spectrum (when it is Number.MAX_VALUE, there's no filter).
   * @default `Number.MAX_VALUE`
   */
  maxNumberPeaks?: number;

  /**
   * When find a max can't be another max in a radius of this size.
   * @default `0`
   */
  groupWidth?: number;
}

/**
 * Filters a mass object
 * @param massXYObject - Mass spectrum to filter
 * @param options
 * @returns Object with filtered x and y data.
 */
export function massFilter(
  massXYObject: MassSpectrum,
  options?: MassFilterOptions,
): MassSpectrum;

export interface SpectraComparisonOptions {
  /**
   * Every peak that is below the main peak times this factor fill be removed (when it is 0, there's no filter).
   * @default `0`
   */
  thresholdFactor?: number;

  /**
   * Maximum number of peaks for each mass spectrum (when it is Number.MAX_VALUE, there's no filter).
   * @default `Number.MAX_VALUE`
   */
  maxNumberPeaks?: number;

  /**
   * When find a max can't be another max in a radius of this size.
   * @default `0`
   */
  groupWidth?: number;

  /**
   * Filter all objects that are below `heightFilter` times the median of the height.
   * @default: `2`
   */
  heightFilter?: number;

  /**
   * Power applied to the mass values.
   * @default `3`
   */
  massPower?: number;

  /**
   * Power applied to the abundance values.
   * @default `0.6`
   */
  intPower?: number;

  /**
   * Minimum similarity value to consider them similar.
   * @default `0.7`
   */
  similarityThreshold?: number;
}

export interface SpectraComparisonResult {
  /**
   * Array of peaks, integrated mass spectra and weighted mass spectra for the first chromatogram.
   */
  peaksFirst: ChromatogramPeak[];

  /**
   * Array of peaks, integrated mass spectra and weighted mass spectra for the second chromatogram.
   */
  peaksSecond: ChromatogramPeak[];
  /**
   * Array of similarities.
   */
  peaksSimilarity: number[];
}

/**
 * Returns the most similar peaks between two GC/MS and their similarities.
 * @returns Most similar peaks and their similarities.
 */
export function spectraComparison(
  chrom1: Chromatogram,
  chrom2: Chromatogram,
  options?: SpectraComparisonOptions,
): SpectraComparisonResult;

export interface KovatsOptions {
  /**
   * @default `0.01`
   */
  threshold?: number;
}

export interface KovatsResult {
  index: number;
  numberFragments: number;
  percentFragments: number;
}

/**
 * Calculates the Kovats retention index for a mass spectrum of a n-alkane.
 * @param ms - Mass spectrum object.
 * @returns Kovats retention index.
 */
export function kovats(ms: MassSpectrum, options?: KovatsOptions): KovatsResult;

export interface AppendKovatsResult extends AppendMassResult {
  kovats: KovatsResult;
}

export function appendKovats(): AppendKovatsResult;

/**
 * Cosine similarity between two MS spectra.
 * This algorithm is optimized for missing mass values.
 * @param ms1x - Array of mass values for the first spectra
 * @param ms1y - Array of weighted abundance values for the first spectra
 * @param ms2x - Array of mass values for the second spectra
 * @param ms2y - Array of weighted abundance values for the second spectra
 * @returns Similarity between two MS spectra.
 */
export function cosineSimilarity(
  ms1x: number[],
  ms1y: number[],
  ms2x: number[],
  ms2y: number[],
): number;

// TODO: type this correctly (need change in dependency).

export interface ScaleAlignmentOptions {
  /**
   * Calculate the quality of the regression.
   * @default `false`
   */
  computeQuality: boolean;

  /**
   * Degree of the polynomial regression.
   * @default `3`
   */
  polynomialDegree: number;
}

/**
 * Aligns the time of the sample based on the regression with his reference value
 * @param reference - Array of peaks, integrated mass spectra and weighted mass spectra for the reference chromatogram
 * @param sample - Array of peaks, integrated mass spectra and weighted mass spectra for the sample chromatogram
 * @param options
 * @returns The scaled spectra.
 * * `scaleRegression`: The regression function to make the regression
 * * `stringFormula`: Regression equation
 * * `r2`: R2 quality number
 * * `error`: Vector of the difference between the spected value and the actual shift value
 */
export function scaleAlignment(
  reference: any[],
  sample: any[],
  options?: ScaleAlignmentOptions,
): any;

/**
 * Creates a new Chromatogram from a JCAMP string.
 * @param jcamp - String containing the JCAMP data
 */
export function fromJcamp(jcamp: string): Chromatogram;

// TODO: use type from dependency xy-parser?
export interface FromTextOptions {
  rescale: boolean;
  uniqueX: boolean;
  xColumn: number;
  yColumn: number;
  maxNumberColumns: number;
  minNumberColumns: number;
  keepInfo: boolean;
}

/**
 * Creates a new Chromatogram from text data.
 * @param text - String containing the data as CSV or TSV.
 * @param options
 */
export function fromText(text: string, options: FromTextOptions): Chromatogram;

export function fromNetCDF(netcdf: any): Chromatogram;

/**
 * Creates a new Chromatogram from supported XML formats.
 * @param xml - String containing the XML chromatogram.
 */
export function fromXML(xml: string): Chromatogram;
