import Regression from 'ml-regression-polynomial';

export function scaleAlignment(reference, sample, options = {}) {
  const { computeQuality = false, polynomialDegree = 3 } = options;
  let referenceTime = reference.map((val) => val.retentionTime);
  let sampleTime = sample.map((val) => val.retentionTime);

  const regression = new Regression(
    sampleTime,
    referenceTime,
    polynomialDegree,
  );

  let error = new Array(sample.length);
  for (let i = 0; i < sample.length; i++) {
    error[i] =
      reference[i].retentionTime - regression.predict(sample[i].retentionTime);
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
