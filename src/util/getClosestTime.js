'use strict';


/**
 * Returns information for the closest time
 * @param {number} rt - Retention time
 * @return {{index: <number>, timeBefore: <number>, timeAfter: <number>, timeClosest: <number>, safeIndexBefore: <number>
 *     safeIndexAfter: <number>}}
 */
function getClosestTime(time) {

    let times=this.getTimes();
    let timeBefore = Number.MIN_VALUE;
    let timeAfter = Number.MAX_VALUE;
    let timeClosest = Number.MAX_VALUE;
    let safeIndexBefore = 0;
    let safeIndexAfter = this.length-1;
    let index = 0;
    let currentDifference = Number.MAX_VALUE;

    for (let i=0; i<this.length; i++) {
        let difference=times[i]-time;
        if (Math.abs(difference)<currentDifference) {
            currentDifference=Math.abs(difference);
            timeClosest = times[i];
            index=i;
            if (difference > 0) {
                if (i>0) {
                    timeBefore = times[i-1];
                    safeIndexBefore = i-1;
                }
                timeAfter = times[i];
                safeIndexAfter = i;
            } else if (difference < 0) {
                timeBefore = times[i];
                safeIndexBefore = i;
                if (i < this.length-1) {
                    timeAfter = times[i+1];
                    safeIndexAfter = i+1;
                } else {
                    timeAfter = Number.MAX_VALUE;
                    safeIndexAfter = this.length-1;
                }
            } else {
                timeBefore = times[i];
                timeAfter = times[i];
                safeIndexBefore = i;
                safeIndexAfter = i;
            }
        }
    }


    return {index, timeBefore, timeAfter, timeClosest, safeIndexBefore, safeIndexAfter};
}

module.exports = getClosestTime;
