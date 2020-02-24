import { X, XY } from 'ml-spectra-processing';

import { baselineCorrection } from './baselineCorrection';

/**
 * Returns a mass spectrum that is the integration of all the spectra in a specific range of time
 * @param {Chromatogram} chromatogram
 * @param {Array<object>} ranges - [{from:,to:}, {from:, to:}, ...]
 * @param {object} [options = {}] - Options object
 * @param {string} [options.seriesName='tic'] - Name of the chromatogram series, by default 'tic
 * @param {string|boolean} [options.baseline] - Applies baseline correction (trapezoid, min)
 * @return {[]}
 */
export function integrate(chromatogram, ranges, options = {}) {
  const { baseline = false, seriesName = 'tic' } = options;
  chromatogram.requiresSeries(seriesName);
  if (!Array.isArray(ranges)) {
    throw new Error('Ranges must be an array of type [{from:to}]');
  }
  if (ranges.length === 0) {
    return [];
  }

  chromatogram.requiresSeries(seriesName);
  let series = chromatogram.series[seriesName];
  if (series.dimension !== 1) {
    throw new Error(`The series "${seriesName}" is not of dimension 1`);
  }

  const time = chromatogram.getTimes();
  let results = [];

  for (let range of ranges) {
    const fromTo = X.getFromToIndex(time, range);
    const integral = integrateRange(
      { x: time, y: series.data },
      fromTo,
      baseline,
    );
    results.push(integral);
  }

  return results;
}

function integrateRange(points, fromTo, baseline) {
  let integration = XY.integration(points, fromTo);

  if (baseline) {
    let correction = baselineCorrection(points, fromTo, baseline);
    return {
      integration: integration - correction.value,
      from: {
        time: points.x[fromTo.fromIndex],
        index: fromTo.fromIndex,
        baseline: correction.from,
      },
      to: {
        time: points.x[fromTo.toIndex],
        index: fromTo.toIndex,
        baseline: correction.to,
      },
    };
  } else {
    return {
      integration,
      from: {
        time: points.x[fromTo.fromIndex],
        index: fromTo.fromIndex,
        baseline: 0,
      },
      to: {
        time: points.x[fromTo.toIndex],
        index: fromTo.toIndex,
        baseline: 0,
      },
    };
  }
}
