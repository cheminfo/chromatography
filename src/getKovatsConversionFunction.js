import binarySearch from 'binary-search';

const ascValue = (a, b) => a.index - b.index;
const ascTime = (a, b) => a.time - b.time;

/**
 * Returns a function that allows to convert from time to Kovats or from Kovats to time
 * @param {Array<object>} [peaks] - List of time-kovats from the reference
 * @param {object} [options = {}] - Options object
 * @param {boolean} [options.revert = false] - True for convert from Kovats to time, false otherwise
 * @return {function(number)} - One parameter function that convert to one dimension to the other
 */
export function getKovatsConversionFunction(peaks, options = {}) {
  const { revert = false } = options;

  const kovatsConversionTable = peaks.map((peak) => ({
    time: peak.x,
    index: peak.kovats.index,
  }));

  if (revert) {
    const indexes = kovatsConversionTable.sort(ascValue);

    return (index) => {
      let position = binarySearch(indexes, { index }, ascValue);

      if (position < 0) {
        position = ~position;

        // handle extreme cases
        if (position === 0 || position === indexes.length) {
          return 0;
        }

        let smallerAlcane = indexes[position - 1].time;
        let largerAlcane = indexes[position].time;
        return (
          ((index - indexes[position - 1].index) *
            (largerAlcane - smallerAlcane)) /
            100 +
          smallerAlcane
        );
      } else {
        return indexes[position].time;
      }
    };
  } else {
    const times = kovatsConversionTable.sort(ascTime);

    return (time) => {
      let position = binarySearch(times, { time }, ascTime);
      if (position < 0) {
        position = ~position;

        // handle extreme cases
        if (position === 0 || position === times.length) {
          return 0;
        }

        let smallerAlcane = times[position - 1].time;
        let largerAlcane = times[position].time;
        return (
          (100 * (time - smallerAlcane)) / (largerAlcane - smallerAlcane) +
          times[position - 1].index
        );
      } else {
        return times[position].index;
      }
    };
  }
}
