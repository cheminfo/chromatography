'use strict';

const Chromatogram = require('../Chromatogram');
const parserXY = require('xy-parser');

/**
 * Creates a new Chromatogram element based in a Txt string
 * @param {string} text - String containing the data as CSV or TSV
 * @return {Chromatogram} - New class element with the given data
 */
function fromText(text) {

    const data = parserXY.parse(text, {arrayType:'xxyy'});


    const time = data[0];
    let series = {
        intensity: data[1]
    };

    return new Chromatogram(time, series);
}

module.exports = fromText;
