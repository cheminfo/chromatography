'use strict';

const massFilter = require('./massFilter');

/**
 * Integrate MS spectra of a peak list
 * @param {Array<Object>} peakList - List of GSD objects
 * @param {Array<Object>} sampleMS - MS array of GC spectra
 * @param {Object} options - Options for the integral filtering
 * @param {Number} [options.thresholdFactor = 0] - Every peak that it's bellow the main peak times this factor fill be removed (when is 0 there's no filter)
 * @param {Number} [options.maxNumberPeaks = Number.MAX_VALUE] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
 * @param {Number} [options.groupWidth = 0] - When find a max can't be another max in a radius of this size
 * @return {Array<Object>} - List of GSD objects with an extra 'ms' field with the integrated MS spectra
 */
function massInPeaks(peakList, sampleMS, options = {}) {
    // integrate MS
    for (let i = 0; i < peakList.length; ++i) {
        let massDictionary = {};
        let max = -1;
        for (let j = peakList[i].left.index; j <= peakList[i].right.index; ++j) {
            for (let k = 0; k < sampleMS[j][0].length; ++k) {
                // round the mass value
                let mass = Math.round(sampleMS[j][0][k]);

                // add the mass value to the dictionary
                if (massDictionary[mass]) {
                    massDictionary[mass] += sampleMS[j][1][k];
                } else {
                    massDictionary[mass] = sampleMS[j][1][k];
                }

                if (massDictionary[mass] > max) {
                    max = massDictionary[mass];
                }
            }
        }
        const massList = Object.keys(massDictionary);
        let msSum = {
            x: new Array(massList.length),
            y: new Array(massList.length)
        };

        for (let j = 0; j < massList.length; ++j) {
            msSum.x[j] = Number(massList[j]);
            msSum.y[j] = massDictionary[massList[j]];
        }

        if (options.maxNumberPeaks || options.thresholdFactor || options.groupWidth) {
            msSum = massFilter(msSum, options);
        }
        peakList[i].ms = msSum;
    }

    return peakList;
}

module.exports = massInPeaks;
