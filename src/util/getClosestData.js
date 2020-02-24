/**
 * Returns the closest mass spectrum to a specific retention time
 * @param {string} seriesName - Series name
 * @param {number} time - Retention time
 * @param {object} [options = {}] - Options object
 * @param {string} [options.seriesName='ms'] - Name of the mass series, by default 'ms''
 * @return {{rt: number, index: number, data: Array}}
 */
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
