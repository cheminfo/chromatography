import {getClosestTime} from './getClosestTime';
import {integrate1D} from './integrate1D';
import {integrate2D} from './integrate2D';

/**
 * Returns a mass spectrum that is the integration of all the spectra in a specific range of time
 * When we combine 2 mass spectra we need to deal with the x axis (containing m/z)
 * If the mass is closest than 'slot' to an existing mass in the new integrated spectrum
 * then the 2 intensity are summed and the mass is proportionally averaged.
 * We should take care that the resulting mass could theoretically be still closest to another peak
 * and we could have to repeat this averaging (but this can only happen once)
 * @param {Chromatogram} chromatogram
 * @param {number|Array<number>} ranges - [from, to] or [ [from1, to1], [from2, to2], ...]
 * @param {object} [options = {}] - Options object
 * @param {number} [options.slot = 2] - Define when 2 peaks will be combined
 * @param {string} [options.name] - Name of the serie to integrate, by default all the series are integrated
 * @param {string|boolean} [options.baseline] - Applies baseline correction
 * @return {{serieName: []}}
 */
export function integrate(chromatogram, ranges, options = {}) {
    const {
        slot = 1,
        name = false,
        baseline = false
    } = options;

    if (!Array.isArray(ranges)) throw new Error('fromTo must be an array of type [from,to]');
    if (!Array.isArray(ranges[0])) ranges = [ranges];

    const time = chromatogram.getTimes();

    // by default we integrate all the series
    let serieNames;
    if (name) {
        serieNames = [name];
    } else {
        serieNames = chromatogram.getSerieNames();
    }
    let results = {};
    serieNames.forEach(name => results[name] = []);

    for (let fromTo of ranges) {
        let from = fromTo[0];
        let to = fromTo[1];
        let fromIndex = getClosestTime(from, time).safeIndexBefore;
        let toIndex = getClosestTime(to, time).safeIndexAfter;

        for (let serieName of serieNames) {
            let serie = chromatogram.series[serieName];
            switch (serie.dimension) {
                case 1:
                    results[serieName].push(integrate1D(time, serie, from, to, fromIndex, toIndex, baseline));
                    break;
                case 2:
                    results[serieName].push(integrate2D(time, serie, from, to, fromIndex, toIndex, {slot}));
                    break;
                default:
                    throw new Error('Serie dimension unrecognized');
            }
        }
    }

    return results;
}
