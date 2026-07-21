import type { ChromatogramSeries1D } from './chromatogram_series_1d.ts';
import type { ChromatogramSeries2D } from './chromatogram_series_2d.ts';
import type {
  ChromatogramSeries1DData,
  ChromatogramSeries2DData,
} from './types.ts';

export interface ChromatogramSeriesOptions {
  meta?: Record<string, unknown>;
}

/**
 * Class to manage a chromatographic series.
 */
export abstract class ChromatogramSeries<
  DataType extends ChromatogramSeries1DData | ChromatogramSeries2DData =
    ChromatogramSeries1DData | ChromatogramSeries2DData,
> {
  name: string;

  #data: DataType;
  #dimension: 1 | 2;
  #meta: Record<string, unknown>;

  constructor(
    array: DataType,
    dimension: 1 | 2,
    options: ChromatogramSeriesOptions = {},
  ) {
    const { meta = {} } = options;
    if (new.target === ChromatogramSeries) {
      throw new Error('You need to create either a 1D or 2D series');
    }
    this.#data = array;
    this.#dimension = dimension;
    this.#meta = meta;
    this.name = '';
  }

  getData(): DataType {
    return this.#data;
  }

  is1D(): this is ChromatogramSeries1D {
    return this.#dimension === 1;
  }

  is2D(): this is ChromatogramSeries2D {
    return this.#dimension === 2;
  }

  toJSON() {
    return {
      data: this.dataToJson(),
      meta: structuredClone(this.#meta),
    };
  }

  protected abstract dataToJson(): DataType;

  /**
   * Specify an array of index to keep
   * @param array
   */
  keep(array: readonly number[]): this {
    const newData: Array<DataType[number]> = [];
    for (const i of array) {
      newData.push(this.#data[i]);
    }
    this.#data = newData as DataType;
    return this;
  }
}
