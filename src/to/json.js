'use strict';


/**
 * Parse the content to an JSON Array
 * @return {Array<object>} - Returns a list with the following fields:
 *  * `time`: Number for the retention time
 *  * `tic`: Number for the total ion chromatogram
 *  * `mass`: List of mass values and their respective intensities
 */
function toJSON() {
    var ans = new Array(this.times.length);
    const tic = this.getSerie('tic').data;
    const mass = this.getSerie('ms').data.map((ms) => {
        var ansMS = new Array(ms[0].length);
        for (var i = 0; i < ansMS.length; i++) {
            ansMS[i] = {
                mass: ms[0][i],
                intensity: ms[1][i]
            };
        }
        return ansMS;
    });

    for (var i = 0; i < ans.length; i++) {
        ans[i] = {
            time: this.times[i],
            tic: tic[i],
            mass: mass[i]
        };
    }

    return ans;
}


module.exports = toJSON;
