import Regression from 'ml-regression-polynomial';

export function scaleAlignment(reference, sample, options = {}) {
  const { computeQuality = false, polynomialDegree = 3 } = options;
  let referenceTime = reference.map((val) => val.x);
  let sampleTime = sample.map((val) => val.x);

  const regression = new Regression(
    sampleTime,
    referenceTime,
    polynomialDegree,
  );

  let error = new Array(sample.length);
  for (let i = 0; i < sample.length; i++) {
    error[i] = reference[i].x - regression.predict(sample[i].x);
  }

  let ans = {
    scaleRegression: regression,
  };

  if (computeQuality) {
    let score = regression.score(sampleTime, referenceTime);
    ans.r2 = score.r2;
    ans.error = error;
  }
  return ans;
}
