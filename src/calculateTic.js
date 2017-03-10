'use strict';

const defaultOptions = {
    force: false
};

/**
 * Calculate tic
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the peak picking
 * @param {object} [options = {}] - Options object
 * @param {boolean} [options.force = false] - Force the calculation it it exists
 * @return {Chromatogram} - Modified chromatogram
 */
function calcultateTic(chromatogram, options) {
    options = Object.assign({}, defaultOptions, options);

    if (chromatogram.findSerieByName('tic') && !options.force) {
        return chromatogram;
    }

    let ms = chromatogram.findSerieByName('ms');
    if (!ms) {
        throw new Error('The mass serie must be defined');
    }
    var massSpectra = ms.data;
    var tic = {
        name: 'tic',
        data: [],
        dimension: 1
    };
    chromatogram.addSerie(tic);

    for (var massSpectrum of massSpectra) {
        tic.data.push(massSpectrum[1].reduce((a, b) => (a + b), 0));
    }
    return chromatogram;
}

module.exports = calcultateTic;
