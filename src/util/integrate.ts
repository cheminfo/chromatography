import type { DataXY, DoubleArray } from 'cheminfo-types';
import { xGetFromToIndex } from 'ml-spectra-processing/x';
import { xyIntegration } from 'ml-spectra-processing/xy';

import type { Chromatogram } from '../chromatogram.ts';
import type { ChromatogramRange } from '../types.ts';

import { baselineCorrection } from './baseline_correction.ts';

export interface IntegrateOptions {
  /**
   * Name of the chromatogram series to use.
   * @default `'tic'`
   */
  seriesName?: string;

  /**
   * Apply the specified baseline correction.
   */
  baseline?: 'trapezoid' | 'min';
}

export interface IntegrateResult {
  integration: number;
  from: {
    time: number;
    index: number;
    baseline: number;
  };
  to: {
    time: number;
    index: number;
    baseline: number;
  };
}

export function integrate(
  chromatogram: Chromatogram,
  ranges: ChromatogramRange[],
  options: IntegrateOptions = {},
) {
  const { baseline, seriesName = 'tic' } = options;

  if (!Array.isArray(ranges)) {
    throw new Error('Ranges must be an array of type [{from,to}]');
  }
  if (ranges.length === 0) {
    return [];
  }

  const series = chromatogram.getSeries1D(seriesName);

  const time = chromatogram.getTimes();
  const results = [];

  for (const range of ranges) {
    const fromTo = xGetFromToIndex(time, range);
    const integral = integrateRange(
      { x: time, y: series.getData() },
      fromTo,
      baseline,
    );
    results.push(integral);
  }

  return results;
}

function integrateRange(
  points: DataXY<DoubleArray>,
  fromTo: ReturnType<typeof xGetFromToIndex>,
  baseline: 'trapezoid' | 'min' | undefined,
) {
  const integration = xyIntegration(points, fromTo);

  if (baseline) {
    const correction = baselineCorrection(points, fromTo, baseline);
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
