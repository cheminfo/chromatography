/**
 * Returns the closest mass spectrum to a specific retention time
 * @param {string} serieName - Serie name
 * @param {number} rt - Retention time
 * @return {{rt: number, index: number, data: Array}}
 */
export function getClosestData(serieName, rt) {
  this.requiresSerie(serieName);
  let closest = this.getClosestTime(rt);
  return {
    rt: closest.timeClosest,
    index: closest.index,
    data: this.getSerie(serieName).data[closest.index],
  };
}
