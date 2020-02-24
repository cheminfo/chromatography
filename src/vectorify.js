import { massFilter } from './massFilter';

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
