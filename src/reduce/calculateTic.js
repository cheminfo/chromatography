'use strict';


/**
 * Calculate tic
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the peak picking
 * @param {object} [options = {}] - Options object
 * @param {boolean} [options.force = false] - Force the calculation it it exists
 * @return {Chromatogram} - Modified chromatogram
 */
function calcultateTic(chromatogram, options={}) {

    if (chromatogram.getSerie('tic') && !options.force) {
        return chromatogram;
    }

    let ms = chromatogram.getSerie('ms');
    if (!ms) {
        throw new Error('The mass serie must be defined');
    }
    var massSpectra = ms.data;
    var tic=[];
    for (var massSpectrum of massSpectra) {
        tic.push(massSpectrum[1].reduce((a, b) => (a + b), 0));
    }
    chromatogram.addSerie('tic',tic);
    return chromatogram;
}

module.exports = calcultateTic;
