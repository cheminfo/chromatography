'use strict';

const analyseMF = require('chemcalc').analyseMF;

/**
 * Recalculates series for GC/MS with lock mass
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the peak picking
 * @param {string|Array<string>} molecularForm - Reference molecular formula(s)
 * @return {{tic: Array<number>, ms: Array<Array<number>>, time: Array<number>}}
 */
function applyLockMass(chromatogram, molecularForm) {
    // allows molecularForm as string or array
    if (typeof molecularForm === 'string') {
        molecularForm = [molecularForm];
    }

    // calculate the mass reference values
    const referenceMass = molecularForm.map((mf) => analyseMF(mf).em);

    const ms = chromatogram.findSerieByName('ms').data;
    if (!ms) {
        throw new Error('The mass serie must be defined');
    }
    const time = chromatogram.getTimes();

    // check where is the reference values
    var oddReference;
    var evenReference;
    if ((ms[0][0].length === 1) && (ms[1][0].length === 1)) {
        // both have one value
        if ((ms[2][0].length !== 1) && (ms[3][0].length === 1)) {
            oddReference = 1;
            evenReference = 0;
        } else if ((ms[2][0].length === 1) && (ms[3][0].length !== 1)) {
            oddReference = 0;
            evenReference = 1;
        } else {
            throw new Error('Unable to know where is the reference spectrum');
        }
    } else if ((ms[0][0].length !== 1) && (ms[1][0].length === 1)) {
        oddReference = 1;
        evenReference = 0;
    } else if ((ms[0][0].length === 1) && (ms[1][0].length !== 1)) {
        oddReference = 0;
        evenReference = 1;
    } else {
        // both have more than one value
        throw new Error('Unable to know where is the reference spectrum');
    }

    if (ms.length % 2 !== 0) {
        throw new Error('The series must have an even size');
    }
    var ans = {
        tic: new Array(ms.length / 2),
        ms: new Array(ms.length / 2),
        time: new Array(ms.length / 2)
    };

    for (var i = 0; i < (ms.length / 2); i++) {
        // calculate the difference between theory and experimental
        var difference = Number.MAX_VALUE;
        for (var j = 0; j < referenceMass.length; j++) {
            if (Math.abs(difference) > Math.abs(referenceMass[j] - ms[2 * i + oddReference][0])) {
                difference = referenceMass[j] - ms[2 * i + oddReference][0];
            }
        }

        // apply the difference
        ans.time[i] = time[2 * i + evenReference];

        var len = ms[2 * i + evenReference][0].length;
        ans.ms[i] = [
            new Array(len),
            new Array(len)
        ];
        for (var m = 0; m < len; m++) {
            ans.ms[i][0][m] = ms[2 * i + evenReference][0][m] + difference;
            ans.ms[i][1][m] = ms[2 * i + evenReference][1][m];
        }

        ans.tic[i] = ms[2 * i + evenReference][1].reduce((a, b) => (a + b), 0);
    }

    return ans;
}

module.exports = applyLockMass;
