import {getKovatsTable} from './getKovatsTable';
import {kovatsConversionFunction} from './kovatsConversionFunction';

/**
 * Calculates the table of Kovats indexes for the reference spectra
 * @param {Chromatogram} reference - Reference spectra
 * @param {object} [options = {}] - Options object
 * @param {number} [options.heightFilter = 100] - Filter all objects that are below heightFilter times the median of the height
 * @param {number} [options.thresholdFactor = 0.005] - Every peak that is below the main peak times this factor will be removed (when is 0 there's no filter)
 * @param {number} [options.maxNumberPeaks = 40] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
 * @param {number} [options.groupWidth = 5] - When find a max can't be another max in a radius of this size
 * @param {boolean} [options.revert = false] - True for convert from Kovats to time, false otherwise
 * @return {{conversionFunction:function(number),kovatsIndexes:Array<object>,peaks:Array<object>}} - Time and value for the Kovats index
 */
export function getKovatsRescale(reference, options) {
    let kovatsTable = getKovatsTable(reference, options);
    let conversionFunction = kovatsConversionFunction(kovatsTable.kovatsIndexes, {revert: options.revert});

    return {
        conversionFunction: conversionFunction,
        kovatsIndexes: kovatsTable.kovatsIndexes,
        peaks: kovatsTable.peaks
    };
}

