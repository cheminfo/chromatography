'use strict';

const Regression = require('ml-regression').NLR.PolynomialRegression;

/**
 * Aligns the time of the sample based on the regression with his reference value
 * @param {Array<Object>} reference - Array of peaks, integrated mass spectra and weighted mass spectra for the reference chromatogram
 * @param {Array<Object>} sample - Array of peaks, integrated mass spectra and weighted mass spectra for the sample chromatogram
 * @param {Object} [options] - Options object
 * @param {Boolean} [options.computeQuality = false] - Calculate the quality of the regression
 * @param {Number} [options.stringFormula = 0] - Precision of the string formula (0 if don't need the value)
 * @param {Number} [options.polynomialDegree = 3] - Degree of the polynomial regression
 * @return {Object} - The scaled spectra:
 * * `reference`: The reference array
 * * `sample`: The scaled sample array
 * * `stringFormula`: Regression equation
 * * `r2`: R2 quality number
 * * `standardDeviation`: Standard deviation of the rescaled values
 */
function scaleAlignment(reference, sample, options = {}) {
    const {computeQuality = false, stringFormula = 0, polynomialDegree = 3} = options;
    let referenceTime = reference.map((val) => val.x);
    let sampleTime = sample.map((val) => val.x);

    const regression = new Regression(sampleTime, referenceTime, polynomialDegree, {computeQuality: computeQuality});

    const maxTime = Math.max(...referenceTime);
    let scaledSample = new Array(sample.length);
    let std = 0;
    for (var i = 0; i < scaledSample.length; i++) {
        scaledSample[i] = sample[i];
        scaledSample[i].x = regression.predict(sample[i].x);
        std += (scaledSample[i].x - sample[i].x) * (scaledSample[i].x - sample[i].x);
    }
    scaledSample = scaledSample.filter((peak) => peak.x <= maxTime);

    let ans = {
        reference: reference,
        sample: scaledSample
    };

    if (stringFormula !== 0) {
        ans.stringFormula = regression.toString(stringFormula);
    }
    if (computeQuality) {
        ans.r2 = regression.quality.r2;
        ans.standardDeviation = Math.sqrt(std);
    }
    return ans;
}

module.exports = scaleAlignment;
