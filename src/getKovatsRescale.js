'use strict';

const getKovatsTable = require('./getKovatsTable');
const kovatsConversionFunction = require('./kovatsConversionFunction');

function getKovatsRescale(reference, options) {
    let kovatsTable = getKovatsTable(reference, options);
    let conversionFunction = kovatsConversionFunction(kovatsTable.kovatsIndexes, {revert: options.revert});

    return {
        conversionFunction: conversionFunction,
        kovatsIndexes: kovatsTable.kovatsIndexes,
        peaks: kovatsTable.peaks
    }
}

module.exports = getKovatsRescale;

