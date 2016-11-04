'use strict';

const Chromatogram = require('./Chromatogram');
const converter = require('jcampconverter').convert;

/**
 * Creates a new Chromatogram element based in a JCAMP string
 * @param {string} jcamp - String containing the JCAMP data
 * @return {Chromatogram} - New class element with the given data
 */
function fromJcamp(jcamp) {
    const data = converter(jcamp, {newGCMS: true}).gcms;
    return new Chromatogram(data);
}

module.exports = fromJcamp;