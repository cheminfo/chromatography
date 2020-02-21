import { massFilter } from './massFilter';

/**
 * Given a list of ranges returns the weighted mass times abundance
 * @param {Array<object>} ranges - List of GSD objects
 * @param {object} options - Options for the integral filtering
 * @param {number} [options.massPower = 3] - Power applied to the mass values
 * @param {number} [options.intPower = 0.6] - Power applied to the abundance values
 * @param {number} [options.thresholdFactor = 0] - Every peak that it's below the main peak times this factor fill be removed (when is 0 there's no filter)
 * @param {number} [options.maxNumberPeaks = Number.MAX_VALUE] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
 * @param {number} [options.groupWidth = 0] - When find a max can't be another max in a radius of this size
 * @return {Array<object>} - List of mass and weighted mass times abundance objects
 */
export function vectorify(ranges, options = {}) {
  const { massPower = 3, intPower = 0.6 } = options;
  let filter =
    options.thresholdFactor || options.maxNumberPeaks || options.groupWidth;

  let vector = new Array(ranges.length);
  if (filter) {
    const filterOptions = {
      thresholdFactor: options.thresholdFactor,
      maxNumberPeaks: options.maxNumberPeaks,
      groupWidth: options.groupWidth,
    };

    for (let i = 0; i < ranges.length; ++i) {
      let len = ranges[i].ms.x.length;
      vector[i] = {
        x: ranges[i].ms.x,
        y: new Array(len),
      };
      for (let j = 0; j < len; ++j) {
        vector[i].y[j] =
          Math.pow(ranges[i].ms.x[j], massPower) *
          Math.pow(ranges[i].ms.y[j], intPower);
      }

      vector[i] = massFilter(vector[i], filterOptions);
    }
  } else {
    for (let i = 0; i < ranges.length; ++i) {
      let len = ranges[i].ms.x.length;
      vector[i] = {
        x: ranges[i].ms.x,
        y: new Array(len),
      };
      for (let j = 0; j < len; ++j) {
        vector[i].y[j] =
          Math.pow(ranges[i].ms.x[j], massPower) *
          Math.pow(ranges[i].ms.y[j], intPower);
      }
    }
  }

  return vector;
}
