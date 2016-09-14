'use strict';

const gsd = require('ml-gsd').gsd;

/**
 * Calculate the array of peaks with their respective integrated MS
 * @param {Array<Number>} tic - TIC array of GC spectra
 * @param {Array<Number>} times - Times array of GC spectra
 * @param {Array<Object>} sampleMS - MS array of GC spectra
 * @return {Array<Object>} - Peaks with their integrated MS
 */
function massInPeaks(tic, times, sampleMS) {
    // first peak selection
    let peakList = gsd(times, tic, {
        noiseLevel: 0,
        realTopDetection: false,
        smoothY: true,
        sgOptions: {windowSize: 5, polynomial: 2},
        heightFactor: 2,
        boundaries: true
    });

    peakList.sort((a, b) => (a.right.index - a.left.index) - (b.right.index - b.left.index));
    let medianDotsWidth = peakList[Math.floor((peakList.length - 1) / 2)];
    medianDotsWidth = medianDotsWidth.right.index - medianDotsWidth.left.index;

    // reset parameters
    if (medianDotsWidth < 5) {
        medianDotsWidth = 5;
    }
    if (medianDotsWidth % 2 === 0) {
        medianDotsWidth -= 1;
    }

    // second peak selection
    peakList = gsd(times, tic, {
        noiseLevel: 0,
        realTopDetection: false,
        smoothY: true,
        sgOptions: {windowSize: medianDotsWidth, polynomial: 2},
        heightFactor: 2,
        boundaries: true
    });
    peakList.sort((a, b) => a.height - b.height);

    // filter height by factor
    let medianHeight = peakList[Math.floor((peakList.length - 1) / 2)].height;
    peakList = peakList.filter((val) => val.height > medianHeight * 2);

    // integrate MS
    for (let i = 0; i < peakList.length; ++i) {
        let massDictionary = {};
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
