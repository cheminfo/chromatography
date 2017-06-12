/**
 * Filter the chromatogram based on a callback
 * The callback will take a time
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the peak picking
 * @param {function(number, number)} callback
 * @param {object} [options] - options object
 * @param {boolean} [options.copy = false] - return a copy of the original object
 * @return {Chromatogram} - Modified chromatogram
 */
export function filter(chromatogram, callback, options = {}) {
    const {copy = false} = options;
    let chrom;
    if (copy) {
        chrom = chromatogram.copy();
    } else {
        chrom = chromatogram;
    }

    let times = chrom.getTimes();
    let newTimes = [];
    let indexToKeep = [];
    for (let i = 0; i < times.length; i++) {
        if (callback(i, times[i])) {
            indexToKeep.push(i);
            newTimes.push(times[i]);
        }
    }
    chrom.setTimes(newTimes);

    for (let key of chrom.getSerieNames()) {
        let serie = chrom.getSerie(key);
        serie.keep(indexToKeep);
    }

    return chrom;
}
