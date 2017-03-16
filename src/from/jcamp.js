'use strict';

const Chromatogram = require('../Chromatogram');
const converter = require('jcampconverter').convert;

/**
 * Creates a new Chromatogram element based in a JCAMP string
 * @param {string} jcamp - String containing the JCAMP data
 * @return {Chromatogram} - New class element with the given data
 */
function fromJcamp(jcamp) {
    const data = converter(jcamp, {newGCMS: true}).gcms;

    const time = data.times;
    let series = {};
    for (var i = 0; i < data.series.length; i++) {
        series[data.series[i].name] = data.series[i].data;
    }

    return new Chromatogram(time, series);
}

module.exports = fromJcamp;
