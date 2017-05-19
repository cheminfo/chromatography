'use strict';

const getClosestTime = require('./getClosestTime');
const integrate1D = require('./integrate1D');
const integrate2D = require('./integrate2D');

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
 * @param {Chromatogram} chromatogram
 * @param {number} fromTo - [from, to] or [ [from1, to1], [from2, to2], ...]
 * @param {object} [options = {}] - Options object
 * @param {number} [options.slot = 2] - Define when 2 peaks will be combined
 * @return {{fromIndex: number, toIndex: number, ms: Array}}
 */
function integrate(chromatogram, fromTos, options) {
    options = Object.assign({}, defaultOptions, options);

    if (! Array.isArray(fromTos)) throw new Error('fromTo must be an array of type [from,to]');
    if (! Array.isArray(fromTos[0])) fromTos=[fromTos];


    const time = chromatogram.getTimes();
    let results=[];

    for (let fromTo of fromTos) {
        let from = fromTo[0];
        let to = fromTo[1];
        let fromIndex = getClosestTime(from, time).safeIndexBefore;
        let toIndex = getClosestTime(to, time).safeIndexAfter;
        // by default we integrate all the series
        let result = {
            fromIndex,
            toIndex,
            from,
            to
        };
        results.push(result);
        for (let serieName of chromatogram.getSerieNames()) {
            let serie = chromatogram.series[serieName];
            switch (serie.dimension) {
                case 1:
                    result.data = integrate1D(time, serie, from, to, fromIndex, toIndex, options);
                    break;
                case 2:
                    result.data = integrate2D(time, serie, from, to, fromIndex, toIndex, options);
                    break;
            }
        }
    }

    return results;
}

module.exports = integrate;
