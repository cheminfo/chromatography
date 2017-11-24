import {analyseMF} from 'chemcalc';

/**
 * Recalculates series for GC/MS with lock mass
 * @param {string|Array<string>} mf - Reference molecular formula(s)
 * @param {object} [options = {}] - Options object
 * @param {boolean} [options.oddReference = true] - Mass reference it's in the odd position
 * @return {object} this
 */
export function applyLockMass(mf, options = {}) {
    const {
        oddReference = true
    } = options;

    // allows mf as string or array
    if (typeof mf === 'string') {
        mf = [mf];
    }

    // calculate the mass reference values
    const referenceMass = mf.map((mf) => analyseMF(mf).em);

    let ms = this.getSerie('ms');
    if (!ms) {
        throw new Error('The "ms" serie must be defined');
    }
    ms = ms.data;

    // check where is the reference values
    let referenceIndexShift = Number(oddReference);
    let msIndexShift = Number(!oddReference);

    // applying the changes for all the spectra
    for (let i = 0; i < ms.length >> 1; i++) {
        let massIndex = 2 * i + msIndexShift;
        let referenceIndex = 2 * i + referenceIndexShift;

        // calculate the difference between theory and experimental (the smallest)
        let difference = Number.MAX_VALUE;
        for (let j = 0; j < referenceMass.length; j++) {
            for (let k = 0; k < ms[referenceIndex][0].length; k++) {
                if (Math.abs(difference) > Math.abs(referenceMass[j] - ms[referenceIndex][0][k])) {
                    difference = referenceMass[j] - ms[referenceIndex][0][k];
                }
            }
        }

        for (let m = 0; m < ms[massIndex][0].length; m++) {
            ms[massIndex][0][m] += difference;
        }
    }

    // remove the time and the mass spectra that contains the reference
    this.filter((index) => index % 2 !== referenceIndexShift);

    return this;
}
