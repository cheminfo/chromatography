'use strict';

/**
 * Filters a mass object
 * @param {Object} massXYObject - Object with x and y data
 * @param {Array<Number>} massXYObject.x - Array of mass values
 * @param {Array<Number>} massXYObject.y - Array of abundance values
 * @param {Object} options - Options for the integral filtering
 * @param {Number} options.thresholdFactor - Every peak that it's bellow the main peak times this factor fill be removed (when is 0 there's no filter)
 * @param {Number} options.maxNumberPeaks - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
 * @return {Object} - Object with filtered x and y data
 */
function massFilter(massXYObject, options = {thresholdFactor: 0, maxNumberPeaks: Number.MAX_VALUE}) {
    const thresholdFactor = options.thresholdFactor || 0;
    const maxNumberPeaks = options.maxNumberPeaks || Number.MAX_VALUE;

    let max = -1;
    let massList = new Array(massXYObject.x.length);
    for (let i = 0; i < massXYObject.x.length; ++i) {
        massList[i] = {
            x: massXYObject.x[i],
            y: massXYObject.y[i]
        };

        if (massXYObject.y[i] > max) {
            max = massXYObject.y[i];
        }
    }

    // filters based in thresholdFactor
    max *= thresholdFactor;
    let filteredList = massList.filter((val) => val.y > max);

    // filters based in maxNumberPeaks
    if (filteredList.length > maxNumberPeaks) {
        filteredList.sort((a, b) => b.y - a.y);
        filteredList.splice(maxNumberPeaks);
        filteredList.sort((a, b) => a.x - b.x);
    }

    let ans = {
        x: new Array(filteredList.length),
        y: new Array(filteredList.length)
    };
    for (let i = 0; i < filteredList.length; ++i) {
        ans.x[i] = filteredList[i].x;
        ans.y[i] = filteredList[i].y;
    }

    return ans;
}

module.exports = massFilter;
