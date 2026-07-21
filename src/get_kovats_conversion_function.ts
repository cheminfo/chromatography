import binarySearch from 'binary-search';

interface KovatsConversionValue {
  index: number;
  time: number;
}

const ascIndex = (
  a: Pick<KovatsConversionValue, 'index'>,
  b: Pick<KovatsConversionValue, 'index'>,
) => a.index - b.index;

const ascTime = (
  a: Pick<KovatsConversionValue, 'time'>,
  b: Pick<KovatsConversionValue, 'time'>,
) => a.time - b.time;

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
  peaks: Array<{ x: number; kovats: { index: number } }>,
  options: GetKovatsConversionFunctionOptions = {},
): (value: number) => number {
  const { revert = false } = options;

  const kovatsConversionTable: KovatsConversionValue[] = peaks.map((peak) => ({
    time: peak.x,
    index: peak.kovats.index,
  }));

  if (revert) {
    const indexes = kovatsConversionTable.sort(ascIndex);

    return (index) => {
      let position = binarySearch(indexes, { index }, ascIndex);

      if (position < 0) {
        position = ~position;

        // handle extreme cases
        if (position === 0 || position === indexes.length) {
          return 0;
        }

        const smallerAlcane = indexes[position - 1].time;
        const largerAlcane = indexes[position].time;
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

        const smallerAlcane = times[position - 1].time;
        const largerAlcane = times[position].time;
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
