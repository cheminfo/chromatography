'use strict';

const analyseMF = require('chemcalc').analyseMF;

const defaultOptions = {
    oddReference: true
};

/**
 * Recalculates series for GC/MS with lock mass
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the peak picking
 * @param {string|Array<string>} mf - Reference molecular formula(s)
 * @param {object} [options={}] - Options object
 * @param {boolean} [options.oddReference=true] - Mass reference it's in the odd position
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

    let ms = chromatogram.getSerie('ms');
    if (!ms) {
        throw new Error('The mass serie must be defined');
    }
    ms = ms.data;
    const time = chromatogram.getTimes();

    // check where is the reference values
    let referenceIndexShift = Number(options.oddReference);
    let msIndexShift = Number(!options.oddReference);

    if (ms.length % 2 !== 0) {
        throw new Error('The series must have an even size');
    }

    let newLength=ms.length>>1;
    let newTimes=new Array(newLength);
    let newData=new Array(newLength);

    // applying the changes for all the spectra
    for (let i = 0; i < newLength; i++) {
        // calculate the difference between theory and experimental (the smallest)
        let difference = Number.MAX_VALUE;
        for (let j = 0; j < referenceMass.length; j++) {
            if (Math.abs(difference) > Math.abs(referenceMass[j] - ms[2 * i + referenceIndexShift][0])) {
                difference = referenceMass[j] - ms[2 * i + referenceIndexShift][0];
            }
        }

        // apply the difference
        newTimes[i] = time[2 * i + msIndexShift];

        var len = ms[2 * i + msIndexShift][0].length;
        newData[i] = [
            new Array(len),
            new Array(len)
        ];
        for (let m = 0; m < len; m++) {
            newData[i][0][m] = ms[2 * i + msIndexShift][0][m] + difference;
            newData[i][1][m] = ms[2 * i + msIndexShift][1][m];
        }
    }

    chromatogram.filter( (index) => index%2 === referenceIndexShift );

    return chromatogram;
}

module.exports = applyLockMass;
