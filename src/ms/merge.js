import { X, XY, XYObject } from 'ml-spectra-processing';

export function merge(chromatogram, options = {}) {
  const time = chromatogram.getTimes();
  let { mergeThreshold = 0.3, seriesName = 'ms', range = {} } = options;

  chromatogram.requiresSeries(seriesName);
  let series = chromatogram.series[seriesName];
  if (series.dimension !== 2) {
    throw new Error(`The series "${seriesName}" is not of dimension 2`);
  }

  if (!range || range.from > time[time.length - 1] || range.to < time[0]) {
    return { x: [], y: [] };
  }
  let { fromIndex, toIndex } = X.getFromToIndex(time, range);
  let result = XY.toXYObject({
    x: series.data[fromIndex][0],
    y: series.data[fromIndex][1],
  });
  for (let i = fromIndex + 1; i <= toIndex; i++) {
    let newData = XY.toXYObject({
      x: series.data[i][0],
      y: series.data[i][1],
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
