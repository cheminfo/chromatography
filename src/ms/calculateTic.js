'use strict';


/**
 * Calculate tic
 * @param {object} [options = {}] - Options object
 * @param {boolean} [options.force = false] - Force the calculation it it exists
 * @return {Chromatogram} - Modified chromatogram
 */
function calcultateTic(options = {}) {

    if (this.getSerie('tic') && !options.force) {
        return this;
    }

    let ms = this.getSerie('ms');
    if (!ms) {
        throw new Error('The mass serie must be defined');
    }
    var massSpectra = ms.data;
    var tic = [];
    for (var massSpectrum of massSpectra) {
        tic.push(massSpectrum[1].reduce((a, b) => (a + b), 0));
    }
    this.addSerie('tic', tic);
    return this;
}

module.exports = calcultateTic;
