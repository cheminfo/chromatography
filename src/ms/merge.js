import { X, XY, XYObject } from 'ml-spectra-processing';

/**
 * Returns a mass spectrum that is the integration of all the spectra in a specific range of time
 * @param {Chromatogram} chromatogram
 * @param {object} [options = {}] - Options object
 * @param {string} [options.serieName='ms'] - Name of the mass serie, by default the first 2D
 * @param {object} [options.threshold = 0.3] - Parameter for merging the peaks
 * @param {object} [options.range={from:min,to:max}] - {from:x,to:y} we integrate a zone, by default all
 * @return {object} (x:[],y:[])
 */
export function merge(chromatogram, options = {}) {
  const time = chromatogram.getTimes();
  let { threshold = 0.3, serieName = 'ms', range } = options;

  chromatogram.requiresSerie(serieName);
  let serie = chromatogram.series[serieName];
  if (serie.dimension !== 2) {
    throw new Error('The serie is not of dimension 2');
  }

  if (range && (range.from > time[time.length - 1] || range.to < time[0])) {
    return {
      x: [],
      y: [],
    };
  }

  let { fromIndex, toIndex } = X.getFromToIndex(time, range);

  let result = XY.toXYObject({
    x: serie.data[fromIndex][0],
    y: serie.data[fromIndex][1],
  });
  for (let i = fromIndex + 1; i <= toIndex; i++) {
    let newData = XY.toXYObject({ x: serie.data[i][0], y: serie.data[i][1] });
    result = result.concat(newData);
    result = XYObject.sortX(result);
    result = XYObject.joinX(result, { threshold });
  }
  result = { ...XYObject.toXY(result), fromIndex, toIndex };
  return result;
}
