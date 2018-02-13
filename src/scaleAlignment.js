import Regression from 'ml-regression-polynomial';

/**
 * Aligns the time of the sample based on the regression with his reference value
 * @param {Array<object>} reference - Array of peaks, integrated mass spectra and weighted mass spectra for the reference chromatogram
 * @param {Array<object>} sample - Array of peaks, integrated mass spectra and weighted mass spectra for the sample chromatogram
 * @param {object} [options] - Options object
 * @param {boolean} [options.computeQuality = false] - Calculate the quality of the regression
 * @param {number} [options.polynomialDegree = 3] - Degree of the polynomial regression
 * @return {object} - The scaled spectra:
 * * `scaleRegression`: The regression function to make the regression
 * * `stringFormula`: Regression equation
 * * `r2`: R2 quality number
 * * `error`: Vector of the difference between the spected value and the actual shift value
 */
export function scaleAlignment(reference, sample, options = {}) {
  const {
    computeQuality = false,
    polynomialDegree = 3
  } = options;
  let referenceTime = reference.map((val) => val.x);
  let sampleTime = sample.map((val) => val.x);

  const regression = new Regression(sampleTime, referenceTime, polynomialDegree);

  let error = new Array(sample.length);
  for (var i = 0; i < sample.length; i++) {
    error[i] = reference[i].x - regression.predict(sample[i].x);
  }

  let ans = {
    scaleRegression: regression
  };

  if (computeQuality) {
    let score = regression.score(sampleTime, referenceTime);
    ans.r2 = score.r2;
    ans.error = error;
  }
  return ans;
}
