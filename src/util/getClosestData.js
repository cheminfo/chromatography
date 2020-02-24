export function getClosestData(chromatogram, time, options = {}) {
  const { seriesName = 'ms' } = options;
  chromatogram.requiresSeries(seriesName);
  let closest = chromatogram.getClosestTime(time);
  return {
    rt: chromatogram.getTimes()[closest],
    index: closest,
    data: chromatogram.getSeries(seriesName).data[closest],
  };
}
