'use strict';

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
 * @return {{fromIndex: number, toIndex: number, ms: Array}}
 */
function integrate(chrom, from, to) {
    var fromIndex = chrom.getClosestTime(from).safeIndexBefore;
    var toIndex = chrom.getClosestTime(to).safeIndexAfter;
    var ms = [];

    return {
        fromIndex,
        toIndex,
        ms
    };
}

module.exports = integrate;
