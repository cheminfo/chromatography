import { X, XY, XYObject } from 'ml-spectra-processing';

/**
 * Returns a mass spectrum that is the integration of all the spectra in a specific range of time
 * @param {Chromatogram} chromatogram
 * @param {Array<object>|object} [range={}] - [{from:,to:}, {from:, to:}, ...]
 * @param {object} [options = {}] - Options object
 * @param {string} [options.serieName='ms'] - Name of the mass serie, by default 'ms'
 * @param {object} [options.mergeThreshold = 0.3] - Parameter for merging the peaks
 * @param {object} [options.range={from:min,to:max}] - {from:x,to:y} we integrate a zone, by default all
 * @return {object} (x:[],y:[])
 */
export function merge(chromatogram, range = {}, options = {}) {
  const time = chromatogram.getTimes();
  let { mergeThreshold = 0.3, serieName = 'ms' } = options;

  chromatogram.requiresSerie(serieName);
  let serie = chromatogram.series[serieName];
  if (serie.dimension !== 2) {
    throw new Error(`The serie "${serieName}" is not of dimension 2`);
  }

  if (!range || range.from > time[time.length - 1] || range.to < time[0]) {
    return { x: [], y: [] };
  }
  let { fromIndex, toIndex } = X.getFromToIndex(time, range);
  let result = XY.toXYObject({
    x: serie.data[fromIndex][0],
    y: serie.data[fromIndex][1],
  });
  for (let i = fromIndex + 1; i <= toIndex; i++) {
    let newData = XY.toXYObject({
      x: serie.data[i][0],
      y: serie.data[i][1],
    });
    result = result.concat(newData);
    result = XYObject.sortX(result);
    result = XYObject.joinX(result, { xError: mergeThreshold });
  }
  result = {
    ...XYObject.toXY(result),
    from: {
      index: fromIndex,
      time: time[fromIndex],
    },
    to: {
      index: toIndex,
      time: time[toIndex],
    },
  };

  return result;
}
