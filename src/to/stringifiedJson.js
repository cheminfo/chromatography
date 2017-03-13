'use strict';

/**
 * Stringify a instance of Chromatogram
 * @return {object}
 */
function toJSON() {
    return {
        times: this.times,
        series: this.series
    };
}

module.exports = toJSON;
