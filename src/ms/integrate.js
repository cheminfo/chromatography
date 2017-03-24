'use strict';

const getClosestTime = require('../util/getClosestTime');

const defaultOptions = {
    slot: 1
};

/**
 * Returns a mass spectrum that is the integration of all the spectra in a specific range of time
 * When we combine 2 mass spectra we need to deal with the x axis (containing m/z)
 * If the mass is closest than 'slot' to an existing mass in the new integrated spectrum
 * then the 2 intensity are summed and the mass is proportionally averaged.
 * We should take care that the resulting mass could theoretically be still closest to another peak
 * and we could have to repeat this averaging (but this can only happen once)
 * @param {Chromatogram} chrom
 * @param {number} from - From retention time
 * @param {number} to - To retention time
 * @param {object} [options = {}] - Options object
 * @param {number} [options.slot = 2] - Define when 2 peaks will be combined
 * @return {{fromIndex: number, toIndex: number, ms: Array}}
 */
function integrate(chrom, from, to, options) {
    options = Object.assign({}, defaultOptions, options);

    const time = chrom.getTimes();
    const ms = chrom.getSerie('ms');
    var fromIndex = getClosestTime(from, time).safeIndexBefore;
    var toIndex = getClosestTime(to, time).safeIndexAfter;

    var masses = [];
    var intensities = [];

    // iterates over all masses
    for (var i = fromIndex; i <= toIndex; i++) {
        // iterates over mass-intensity
        for (var j = 0; j < ms[i][0].length; j++) {
            // search possible position
            var position = {
                index: -1,
                distance: Number.MAX_VALUE
            };
            for (var k = 0; k < masses.length; k++) {
                // TODO work in progress
            }

            // check if merge needed
        }
    }

    return {
        fromIndex,
        toIndex,
        ms: [masses, intensities]
    };
}

module.exports = integrate;
