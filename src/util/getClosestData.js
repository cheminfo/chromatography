'use strict';

/**
 * Returns the closest mass spectrum to a specific retention time
 * @param {string} name - Serie name
 * @param {number} rt - Retention time
 * @return {{rt: number, index: number, data: Array}}
 */
function getClosestData(name, rt) {
    this.requiresSerie(name);
    let closest = this.getClosestTime(rt);
    return {
        rt: closest.timeClosest,
        index: closest.index,
        data: this.getSerie(name).data[closest.index]
    };
}

module.exports = getClosestData;
