import { X } from 'ml-spectra-processing';

import { baselineCorrection } from './baselineCorrection';

/**
 * Returns a mass spectrum that is the integration of all the spectra in a specific range of time
 * @param {Chromatogram} chromatogram
 * @param {string} serieName - Name of the serie to integrate
 * @param {Array<Array<number>>} ranges - [[from1, to1], [from2, to2], ...]
 * @param {object} [options = {}] - Options object
 * @param {string|boolean} [options.baseline] - Applies baseline correction (trapezoid, min)
 * @return {[]}
 */
export function integrate(chromatogram, serieName, ranges, options = {}) {
  const { baseline = false } = options;

  if (!Array.isArray(ranges)) {
    throw new Error('ranges must be an array of type [[from,to]]');
  }
  if (ranges.length === 0) {
    return undefined;
  }

  if (!Array.isArray(ranges[0]) || ranges[0].length !== 2) {
    throw new Error('ranges must be an array of type [[from,to]]');
  }

  chromatogram.requiresSerie(serieName);
  let serie = chromatogram.series[serieName];
  if (serie.dimension !== 1) {
    throw new Error('the serie is not of dimension 1');
  }

  const time = chromatogram.getTimes();
  let results = [];

  for (let fromTo of ranges) {
    let from = fromTo[0];
    let to = fromTo[1];
    let fromIndex = getClosestTime(from, time).safeIndexBefore;
    let toIndex = getClosestTime(to, time).safeIndexAfter;

    results.push(
      _integrate(time, serie, from, to, fromIndex, toIndex, baseline),
    );
  }

  return results;
}

function _integrate(time, serie, from, to, fromIndex, toIndex, baseline) {
  let total = 0;
  let base = {};
  for (let i = fromIndex; i < toIndex; i++) {
    let timeStart = time[i];
    let timeEnd = time[i + 1];
    let heightStart = serie.data[i];
    if (i === fromIndex) {
      // need to check the exact starting point
      heightStart =
        serie.data[i] +
        ((serie.data[i + 1] - serie.data[i]) * (from - timeStart)) /
          (timeEnd - timeStart);
      base.start = { height: heightStart, time: from };
      timeStart = from;
    }

    let heightEnd = serie.data[i + 1];
    if (i === toIndex - 1) {
      heightEnd =
        serie.data[i] +
        ((serie.data[i + 1] - serie.data[i]) * (to - timeStart)) /
          (timeEnd - timeStart);
      base.end = { height: heightEnd, time: to };
      timeEnd = to;
    }
    total += ((timeEnd - timeStart) * (heightStart + heightEnd)) / 2;
  }

  if (baseline) {
    let ans = baselineCorrection(total, base, baseline);
    return {
      integral: ans.integral,
      from: {
        time: from,
        index: fromIndex,
        baseline: ans.base.start.height,
      },
      to: {
        time: to,
        index: toIndex,
        baseline: ans.base.end.height,
      },
    };
  } else {
    return {
      integral: total,
      from: {
        time: from,
        index: fromIndex,
        baseline: 0,
      },
      to: {
        time: to,
        index: toIndex,
        baseline: 0,
      },
    };
  }
}
