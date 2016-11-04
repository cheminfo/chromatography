'use strict';

/**
 * Modifies the time applying the conversion function
 * @param {Array<number>} originalTime
 * @param {function(number)} conversionFunction
 * @return {Array<number>}
 */
function rescaleTime(originalTime, conversionFunction) {
    return originalTime.map(conversionFunction);
}

module.exports = rescaleTime;
