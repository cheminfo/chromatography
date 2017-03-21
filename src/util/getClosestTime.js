'use strict';

const binarySearch = require('binary-search');
const ascValue = (a, b) => (a - b);

/**
 * Returns information for the closest time
 * @param {number} time - Retention time
 * @param {Array<number>} times - Time array
 * @return {{index: number, timeBefore: number, timeAfter: number, timeClosest: number, safeIndexBefore: number, safeIndexAfter: number}}
 */
function getClosestTime(time, times) {
    let position = binarySearch(times, time, ascValue);

    if (position < 0) {
        // the value doesn't exists in the array
        position = -position - 1;

        let safeIndexBefore = position === 0 ? 0 : position - 1;
        if (position > (times.length - 1)) {
            position = times.length - 1;
            safeIndexBefore = times.length - 1;
        }
        const safeIndexAfter = position;

        let difference = times[position] - time;
        if (difference > 0.5) {
            position = safeIndexBefore;
        }

        return {
            index: position,
            timeBefore: times[safeIndexBefore],
            timeAfter: times[safeIndexAfter],
            timeClosest: times[position],
            safeIndexBefore: safeIndexBefore,
            safeIndexAfter: safeIndexAfter
        };
    } else {
        // the value exists in the array
        return {
            index: position,
            timeBefore: times[position],
            timeAfter: times[position],
            timeClosest: times[position],
            safeIndexBefore: position,
            safeIndexAfter: position
        };
    }
}

module.exports = getClosestTime;
