'use strict';


/**
 * Returns the closest mass spectrum to a specific retention time
 * @param {number} rt - Retention time
 * @param {object} [options={}] - Options object
 * @return {{rt: <number>, ms: <Array<Array<number>>>}}
 */
function applyLockMass(mf, options) {
    options = Object.assign({}, defaultOptions, options);




    // check where is the reference values
    let referenceIndexShift = Number(options.oddReference);
    let msIndexShift = Number(!options.oddReference);

    if (ms.length % 2 !== 0) {
        throw new Error('The series must have an even size');
    }

    // applying the changes for all the spectra
    for (let i = 0; i < ms.length >> 1; i++) {
        let massIndex = 2 * i + msIndexShift;
        let referenceIndex = 2 * i + referenceIndexShift;

        // calculate the difference between theory and experimental (the smallest)
        let difference = Number.MAX_VALUE;
        for (let j = 0; j < referenceMass.length; j++) {
            if (Math.abs(difference) > Math.abs(referenceMass[j] - ms[referenceIndex][0])) {
                difference = referenceMass[j] - ms[referenceIndex][0];
            }
        }

        for (let m = 0; m < ms[massIndex][0].length; m++) {
            ms[massIndex][0][m] += difference;
        }
    }

    // we remove the time and the mass spectra that containss the reference
    this.filter((index) => index % 2 !== referenceIndexShift);

    return this;
}

module.exports = applyLockMass;
