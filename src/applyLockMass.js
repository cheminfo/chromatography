'use strict';

const analyseMF = require('chemcalc').analyseMF;

const defaultOptions = {
    oddReference: true
};

/**
 * Recalculates series for GC/MS with lock mass
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the peak picking
 * @param {string|Array<string>} mf - Reference molecular formula(s)
 * @param {object} [options] - Options object
 * @param {boolean} [options.oddReference] - Mass reference it's in the odd position
 * @return {{tic: Array<number>, ms: Array<Array<number>>, time: Array<number>}}
 */
function applyLockMass(chromatogram, mf, options) {
    options = Object.assign({}, defaultOptions, options);

    // allows mf as string or array
    if (typeof mf === 'string') {
        mf = [mf];
    }

    // calculate the mass reference values
    const referenceMass = mf.map((mf) => analyseMF(mf).em);

    const ms = chromatogram.findSerieByName('ms').data;
    if (!ms) {
        throw new Error('The mass serie must be defined');
    }
    const time = chromatogram.getTimes();

    // check where is the reference values
    var referenceIndexShift = Number(options.oddReference);
    var msIndexShift = Number(!options.oddReference);

    if (ms.length % 2 !== 0) {
        throw new Error('The series must have an even size');
    }
    var result = {
        tic: new Array(ms.length / 2),
        ms: new Array(ms.length / 2),
        time: new Array(ms.length / 2)
    };

    for (var i = 0; i < (ms.length / 2); i++) {
        // calculate the difference between theory and experimental
        var difference = Number.MAX_VALUE;
        for (var j = 0; j < referenceMass.length; j++) {
            if (Math.abs(difference) > Math.abs(referenceMass[j] - ms[2 * i + referenceIndexShift][0])) {
                difference = referenceMass[j] - ms[2 * i + referenceIndexShift][0];
            }
        }

        // apply the difference
        result.time[i] = time[2 * i + msIndexShift];

        var len = ms[2 * i + msIndexShift][0].length;
        result.ms[i] = [
            new Array(len),
            new Array(len)
        ];
        for (var m = 0; m < len; m++) {
            result.ms[i][0][m] = ms[2 * i + msIndexShift][0][m] + difference;
            result.ms[i][1][m] = ms[2 * i + msIndexShift][1][m];
        }

        result.tic[i] = ms[2 * i + msIndexShift][1].reduce((a, b) => (a + b), 0);
    }

    return result;
}

module.exports = applyLockMass;
