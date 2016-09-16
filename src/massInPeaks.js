'use strict';

/**
 * Integrate MS spectra of a peak list
 * @param {Array<Object>} peakList - List of GSD objects
 * @param {Array<Object>} sampleMS - MS array of GC spectra
 * @return {Array<Object>} - List of GSD objects with an extra 'ms' field with the integrated MS spectra
 */
function massInPeaks(peakList, sampleMS) {
    // integrate MS
    for (let i = 0; i < peakList.length; ++i) {
        let massDictionary = {};
        let max = -1;
        for (let j = peakList[i].left.index; j <= peakList[i].right.index; ++j) {
            for (let k = 0; k < sampleMS[j][0].length; ++k) {
                // round the mass value
                let mass = Math.round(sampleMS[j][0][k]);
                if (Math.round(sampleMS[j][0][k]) - mass > 0.5) {
                    ++mass;
                }

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

        peakList[i].ms = msSum;
    }

    return peakList;
}

module.exports = massInPeaks;
