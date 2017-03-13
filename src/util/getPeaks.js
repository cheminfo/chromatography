'use strict';

const gsd = require('ml-gsd').gsd;

/**
 * Apply the GSD peak picking algorithm
 * @param {Chromatogram} this - GC/MS chromatogram where make the peak picking
 * @param {object} [options] - Options object
 * @param {object} [options.heightFilter = 2] - Filter all objects that are bellow `heightFilter` times the median of the height
 * @return {Array<object>} - List of GSD objects
 */
function getPeaks(options = {}) {
    const {heightFilter = 2} = options;

    let tic = this.getSerie('tic');
    if (!tic) {
        throw new Error('\'tic\' serie not founded');
    }
    tic = tic.data;
    let times = this.getTimes();

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
    peakList = peakList.filter((val) => val.height > medianHeight * heightFilter);

    return peakList;
}

module.exports = getPeaks;
