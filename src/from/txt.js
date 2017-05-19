'use strict';

const Chromatogram = require('../Chromatogram');
const converter = require('xy-parser').parse;

/**
 * Creates a new Chromatogram element based in a Txt string
 * @param {string} txt - String containing the data as CSV or TSV
 * @return {Chromatogram} - New class element with the given data
 */
function fromTxt(jcamp) {
    const data = converter(txt);


    console.log(data);

    const time = data.times;
    let series = {};
    for (var i = 0; i < data.series.length; i++) {
        series[data.series[i].name] = data.series[i].data;
    }

    return new Chromatogram(time, series);
}

module.exports = fromJcamp;
