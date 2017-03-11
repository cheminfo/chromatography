'use strict';


/**
 * Stringify a instance of Chromatogram
 * @return {string} -
 */
function toStringifiedJSON() {
    return JSON.stringify({
        times: this.times,
        series: this.series
    });
}

module.exports = toStringifiedJSON;
