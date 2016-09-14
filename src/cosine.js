'use strict';

function cosine(ms1x, ms1y, ms2x, ms2y) {
    let index1 = 0;
    let index2 = 0;

    let product = 0;
    let norm1 = 0;
    let norm2 = 0;

    while ((index1 < ms1x.length) || (index2 < ms2x.length)) {
        let w1 = Math.pow(ms1x[index1], massPower) * Math.pow(ms1y[index1], intPower);
        let w2 = Math.pow(ms2x[index2], massPower) * Math.pow(ms2y[index2], intPower);
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
    if (norm1Norm2 !== 0) {
        return (product * product) / (norm1Norm2);
    } else {
        return 0;
    }
}

module.exports = cosine;
