/**
 * Returns the closest mass spectrum to a specific retention time
 * @param {string} serieName - Serie name
 * @param {number} time - Retention time
 * @param {object} [options = {}] - Options object
 * @param {string} [options.serieName='ms'] - Name of the mass serie, by default 'ms''
 * @return {{rt: number, index: number, data: Array}}
 */
export function getClosestData(chromatogram, time, options = {}) {
  const { serieName = 'ms' } = options;
  chromatogram.requiresSerie(serieName);
  let closest = chromatogram.getClosestTime(time);
  return {
    rt: chromatogram.getTimes()[closest],
    index: closest,
    data: chromatogram.getSerie(serieName).data[closest],
  };
}
