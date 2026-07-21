import { PolynomialRegression } from 'ml-regression-polynomial';

import type { ChromatogramPeak } from './peaks/get_peaks.ts';

export interface ScaleAlignmentOptions {
  /**
   * Calculate the quality of the regression.
   * @default false
   */
  computeQuality?: boolean;

  /**
   * Degree of the polynomial regression.
   * @default 3
   */
  polynomialDegree?: number;
}

export interface ScaleAlignmentResult {
  scaleRegression: PolynomialRegression;
  r2: number;
  error: number[];
}

/**
 * Aligns the time of the sample based on the regression with his reference value
 * @param reference - Array of peaks, integrated mass spectra and weighted mass spectra for the reference chromatogram
 * @param sample - Array of peaks, integrated mass spectra and weighted mass spectra for the sample chromatogram
 * @param options
 * @returns The scaled spectra.
 * * `scaleRegression`: The regression function to make the regression
 * * `stringFormula`: Regression equation
 * * `r2`: R2 quality number
 * * `error`: Vector of the difference between the spected value and the actual shift value
 */
export function scaleAlignment(
  reference: ChromatogramPeak[],
  sample: ChromatogramPeak[],
  options: ScaleAlignmentOptions = {},
) {
  const { computeQuality = false, polynomialDegree = 3 } = options;
  const referenceTime = reference.map((val) => val.retentionTime);
  const sampleTime = sample.map((val) => val.retentionTime);

  const regression = new PolynomialRegression(
    sampleTime,
    referenceTime,
    polynomialDegree,
  );

  const error = [];
  for (let i = 0; i < sample.length; i++) {
    error.push(
      reference[i].retentionTime - regression.predict(sample[i].retentionTime),
    );
  }

  const ans: ScaleAlignmentResult = {
    scaleRegression: regression,
    r2: -1,
    error: [],
  };

  if (computeQuality) {
    const score = regression.score(sampleTime, referenceTime);
    ans.r2 = score.r2;
    ans.error = error;
  }
  return ans;
}
