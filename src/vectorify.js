'use strict';

const massFilter = require('./massFilter');

/**
 * Given a list of GSD objects returns the weighted mass times abundance
 * @param {Array<Object>} peakList - List of GSD objects
 * @param {Object} options - Options for the integral filtering
 * @param {Number} [options.massPower = 3] - Power applied to the mass values
 * @param {Number} [options.intPower = 0.6] - Power applied to the abundance values
 * @param {Number} [options.thresholdFactor = 0] - Every peak that it's bellow the main peak times this factor fill be removed (when is 0 there's no filter)
 * @param {Number} [options.maxNumberPeaks = Number.MAX_VALUE] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
 * @return {Array<Object>} - List of mass and weighted mass times abundance objects
 */
function vectorify(peakList, options = {}) {
    const massPower = options.massPower || 3;
    const intPower = options.intPower || 0.6;
    let filter = (options.thresholdFactor || options.maxNumberPeaks);

    let vector = new Array(peakList.length);
    if (filter) {
        const filterOptions = {
            thresholdFactor: options.thresholdFactor,
            maxNumberPeaks: options.maxNumberPeaks
        };

        for (let i = 0; i < peakList.length; ++i) {
            let len = peakList[i].ms.x.length;
            vector[i] = {
                x: peakList[i].ms.x,
                y: new Array(len)
            };
            for (let j = 0; j < len; ++j) {
                vector[i].y[j] = Math.pow(peakList[i].ms.x[j], massPower) * Math.pow(peakList[i].ms.y[j], intPower);
            }

            vector[i] = massFilter(vector[i], filterOptions);
        }
    } else {
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
    }

    return vector;
}

module.exports = vectorify;
