import { xGetFromToIndex, xyIntegration } from 'ml-spectra-processing';

import { baselineCorrection } from './baselineCorrection';

export function integrate(chromatogram, ranges, options = {}) {
  const { baseline, seriesName = 'tic' } = options;

  if (!Array.isArray(ranges)) {
    throw new Error('Ranges must be an array of type [{from,to}]');
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
    const fromTo = xGetFromToIndex(time, range);
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
  let integration = xyIntegration(points, fromTo);

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
