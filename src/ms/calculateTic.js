'use strict';


/**
 * Calculate tic
 * @param {Chromatogram} chrom - GC/MS chromatogram where make the peak picking
 * @return {Array} - Calculated tic
 */
function calculateTic(chrom) {
    let ms = chrom.getSerie('ms');
    if (!ms) {
        throw new Error('The mass serie must be defined');
    }
    var massSpectra = ms.data;
    var tic = [];
    for (var massSpectrum of massSpectra) {
        tic.push(massSpectrum[1].reduce((a, b) => (a + b), 0));
    }

    return tic;
}

module.exports = calculateTic;
