'use strict';

/**
 * Calculates the Kovats retention index for a mass spectra of a n-alkane
 * @param {object} ms - An mass spectra object
 * @param {Array<number>} ms.x - Array of masses
 * @param {Array<number>} ms.y - Array of intensities
 * @return {number} - Kovats retention index
 */
function kovats(ms) {
    let mass = ms.x;
    let massMol = [];
    const targets = [43, 57, 71, 85];

    for (let i = 0; i < mass.length; i++) {
        if ((mass[i] - 2) % 14 === 0) {
            massMol.push(mass[i]);
        }
    }
    if (massMol.length === 0) {
        return 0;
    }

    let kovatsIndex = 0;
    for (var m = 0; m < massMol.length; m++) {
        let candidate = true;
        for (var t = 0; t < targets.length; t++) {
            candidate = candidate
                && (mass.indexOf(targets[t]) !== -1)
                && ((mass.indexOf(massMol[m] - targets[t]) !== -1)
                || (mass.indexOf(massMol[m] - targets[t] + 1) !== -1)
                || (mass.indexOf(massMol[m] - targets[t] - 1) !== -1));
        }
        if (candidate) {
            kovatsIndex = 100 * (massMol[m] - 2) / 14;
        }
    }
    return kovatsIndex;
}

module.exports = kovats;
