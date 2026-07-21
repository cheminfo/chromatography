import { massFilter } from './mass_filter.ts';
import type { AppendMassResultValue } from './peaks/append_mass.ts';

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

/**
 * Given a list of ranges with ms, returns the weighted mass times abundance.
 * @param ranges
 * @param options
 * @returns List of mass and weighted mass times abundance objects
 */
export function vectorify(
  ranges: AppendMassResultValue[],
  options: VectorifyOptions = {},
): MassSpectrum[] {
  const { massPower = 3, intPower = 0.6 } = options;
  const filter =
    options.thresholdFactor || options.maxNumberPeaks || options.groupWidth;

  const vector = new Array(ranges.length);
  if (filter) {
    const filterOptions = {
      thresholdFactor: options.thresholdFactor,
      maxNumberPeaks: options.maxNumberPeaks,
      groupWidth: options.groupWidth,
    };

    for (let i = 0; i < ranges.length; ++i) {
      const len = ranges[i].ms.x.length;
      vector[i] = {
        x: ranges[i].ms.x,
        y: new Array(len),
      };
      for (let j = 0; j < len; ++j) {
        vector[i].y[j] =
          ranges[i].ms.x[j] ** massPower * ranges[i].ms.y[j] ** intPower;
      }

      vector[i] = massFilter(vector[i], filterOptions);
    }
  } else {
    for (let i = 0; i < ranges.length; ++i) {
      const len = ranges[i].ms.x.length;
      vector[i] = {
        x: ranges[i].ms.x,
        y: new Array(len),
      };
      for (let j = 0; j < len; ++j) {
        vector[i].y[j] =
          ranges[i].ms.x[j] ** massPower * ranges[i].ms.y[j] ** intPower;
      }
    }
  }

  return vector;
}
