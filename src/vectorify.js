'use strict';

/**
 * Given a list of GSD objects returns the weighted mass times abundance
 * @param {Array<Object>} peakList - List of GSD objects
 * @param {Number} massPower - Power applied to the mass values
 * @param {Number} intPower - Power applied to the abundance values
 * @return {Array<Object>} - List of mass and weighted mass times abundance objects
 */
function vectorify(peakList, massPower = 3, intPower = 0.6) {
    let vector = new Array(peakList.length);
    for (let i = 0; i < peakList.length; ++i) {
        let len = peakList[i].ms.x.length;
        vector[i] = {
            x: peakList[i].ms.x,
            y: new Array(len)
        };
        for (let j = 0; j < len; ++j) {
            vector[i].y[j] = Math.pow(peakList[i].ms.x[j], massPower) * Math.pow(peakList[i].ms.y[j], intPower);
        }
    }

    return vector;
}

module.exports = vectorify;
