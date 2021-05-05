import {
  xySortX,
  xGetFromToIndex,
  xyArrayWeightedMerge,
} from 'ml-spectra-processing';

export function merge(chromatogram, options = {}) {
  let { mergeThreshold = 0.3, seriesName = 'ms', range = {} } = options;

  const time = chromatogram.getTimes();

  chromatogram.requiresSeries(seriesName);
  let series = chromatogram.series[seriesName];
  if (series.dimension !== 2) {
    throw new Error(`The series "${seriesName}" is not of dimension 2`);
  }

  if (!range || range.from > time[time.length - 1] || range.to < time[0]) {
    return { x: [], y: [] };
  }
  let { fromIndex, toIndex } = xGetFromToIndex(time, range);

  let data = series.data
    .slice(fromIndex, toIndex + 1)
    .map((datum) => xySortX({ x: datum[0], y: datum[1] }));

  return {
    ...xyArrayWeightedMerge(data, { delta: mergeThreshold }),
    from: {
      index: fromIndex,
      time: time[fromIndex],
    },
    to: {
      index: toIndex,
      time: time[toIndex],
    },
  };
}
