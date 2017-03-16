'use strict';


/**
 * Returns the closest mass spectrum to a specific retention time
 * @param {number} rt - Retention time
 * @param {string} name - Serie name
 * @return {{rt: <number>, data: <Array>}}
 */
function getClosestData(name, rt) {
    this.requiresSerie(name);
    let closest=this.getClosestTime(rt)
    return {
        rt: closest.timeClosest,
        index: closest.index,
        data: this.getSerie(name).data[closest.index]
    };
}

module.exports = getClosestData;
