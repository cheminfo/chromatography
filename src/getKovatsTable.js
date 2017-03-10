'use strict';

const kovats = require('./kovats');
const getPeaks = require('./getPeaks');
const massInPeaks = require('./massInPeaks');

/**
 * Calculates the table of Kovats indexes for the reference spectra
 * @param {Chromatogram} reference - Reference spectra
 * @param {object} [options = {}] - Options object
 * @param {number} [options.heightFilter = 100] - Filter all objects that are bellow heightFilter times the median of the height
 * @param {number} [options.thresholdFactor = 0.005] - Every peak that it's bellow the main peak times this factor fill be removed (when is 0 there's no filter)
 * @param {number} [options.maxNumberPeaks = 40] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
 * @param {number} [options.groupWidth = 5] - When find a max can't be another max in a radius of this size
 * @return {Array<object>} - Time and value for the Kovats index
 */
function getKovatsTable(reference, options = {}) {
    const {heightFilter = 100, thresholdFactor = 0.005, maxNumberPeaks = 40, groupWidth = 5} = options;

    // Peak picking
    let peaks = getPeaks(reference, {heightFilter});
    peaks = peaks.sort((a, b) => a.index - b.index);

    // integrate mass in the peaks
    let ms = reference.getSerie('ms').data;
    let integratedMs = massInPeaks(peaks, ms, {thresholdFactor, maxNumberPeaks, groupWidth});

    var kovatsIndexes = new Array(integratedMs.length);
    for (var i = 0; i < integratedMs.length; i++) {
        kovatsIndexes[i] = {
            time: integratedMs[i].x,
            value: kovats(integratedMs[i].ms)
        };
    }

    return kovatsIndexes;
}

module.exports = getKovatsTable;
