'use strict';


/**
 * Calculate tic
 * @param {Chromatogram} chrom - GC/MS chromatogram where make the peak picking
 * @param {object} [options = {}] - Options object
 * @param {boolean} [options.force = false] - Force the calculation it it exists
 * @return {Chromatogram} - Modified chromatogram
 */
function calcultateTic(chrom, options = {}) {

    if (chrom.getSerie('tic') && !options.force) {
        return chrom;
    }

    let ms = chrom.getSerie('ms');
    if (!ms) {
        throw new Error('The mass serie must be defined');
    }
    var massSpectra = ms.data;
    var tic = [];
    for (var massSpectrum of massSpectra) {
        tic.push(massSpectrum[1].reduce((a, b) => (a + b), 0));
    }
    this.addSerie('tic', tic);
    return chrom;
}

module.exports = calcultateTic;
