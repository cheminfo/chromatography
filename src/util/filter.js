'use strict';

/**
 * Filter the chromatogram based on a callback
 * The callback will take a time
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the peak picking
 *
 * @return {Chromatogram} - Modified chromatogram
 */
function filter(chromatogram, callback) {
    let times=chromatogram.getTimes();
    let newTimes=[];
    let indexToKeep=[];
    for (let i=0; i<times.length; i++) {
        if (callback(i,times[i])) {
            indexToKeep.push(i);
            newTimes.push(times[i]);
        }
    }
    chromatogram.setTimes(newTimes);

    for (let key of chromatogram.getSerieNames()) {
        let serie = chromatogram.getSerie(key);
        serie.keep(indexToKeep);
    }

    return chromatogram;
}

module.exports = filter;
