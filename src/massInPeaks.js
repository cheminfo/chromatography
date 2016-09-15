'use strict';

/**
 * Integrate MS spectra of a peak list
 * @param {Array<Object>} peakList - List of GSD objects
 * @param {Array<Object>} sampleMS - MS array of GC spectra
 * @param {Number} thresholdFactor - Every peak that it's bellow the main peak times this factor fill be removed (when is 0 there's no filter)
 * @param {Number} maxNumberPeaks - Maximum number of peaks for each mass spectra (when is -1 there's no filter)
 * @return {Array<Object>} - List of GSD objects with an extra 'ms' field with the integrated MS spectra
 */
function massInPeaks(peakList, sampleMS, thresholdFactor = 0, maxNumberPeaks = -1) {
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

        if (thresholdFactor > 0 || (maxNumberPeaks !== -1)) {
            let count = 0;
            max *= thresholdFactor;

            // filters based in thresholdFactor
            let filteredList = new Array(massList.length);
            for (let j = 0; j < massList.length; ++j) {
                if (massDictionary[massList[j]] > max) {
                    filteredList[count++] = {
                        x: Number(massList[j]),
                        y: massDictionary[massList[j]]
                    };
                }
            }
            filteredList.length = count;

            // filters based in maxNumberPeaks
            if (count > maxNumberPeaks && maxNumberPeaks !== -1) {
                filteredList.sort((a, b) => b.y - a.y);
                filteredList.splice(maxNumberPeaks);
                filteredList.sort((a, b) => a.x - b.x);
            }

            for (let j = 0; j < filteredList.length; ++j) {
                msSum.x[j] = filteredList[j].x;
                msSum.y[j] = filteredList[j].y;
            }

            msSum.x.length = filteredList.length;
            msSum.y.length = filteredList.length;
        } else {
            for (let j = 0; j < massList.length; ++j) {
                msSum.x[j] = Number(massList[j]);
                msSum.y[j] = massDictionary[massList[j]];
            }
        }

        peakList[i].ms = msSum;
    }

    return peakList;
}

module.exports = massInPeaks;
