'use strict';

/**
 * Cosine similarity between two MS spectra
 * @param {Array<Number>} ms1x - Array of mass values for the first spectra
 * @param {Array<Number>} ms1y - Array of weighted abundance values for the first spectra
 * @param {Array<Number>} ms2x - Array of mass values for the second spectra
 * @param {Array<Number>} ms2y - Array of weighted abundance values for the second spectra
 * @return {Number} - Similarity between two MS spectra
 */
function cosine(ms1x, ms1y, ms2x, ms2y) {
    let index1 = 0;
    let index2 = 0;

    let product = 0;
    let norm1 = 0;
    let norm2 = 0;

    while ((index1 < ms1x.length) || (index2 < ms2x.length)) {
        let w1 = ms1y[index1];
        let w2 = ms2y[index1];
        if (index2 === ms2x.length || ms1x[index1] < ms2x[index2]) {
            norm1 += w1 * w1;
            ++index1;
        } else if (index1 === ms1x.length || ms2x[index2] < ms1x[index1]) {
            norm2 += w2 * w2;
            ++index2;
        } else {
            product += w1 * w2;
            norm1 += w1 * w1;
            norm2 += w2 * w2;
            ++index1;
            ++index2;
        }
    }

    var norm1Norm2 = norm1 * norm2;
    if (norm1Norm2 === 0) {
        return 0;
    } else {
        return (product * product) / (norm1Norm2);
    }
}

module.exports = cosine;
