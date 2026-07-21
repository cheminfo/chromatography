import airpls from 'ml-airpls';
import type { BroadenPeaksOptions } from 'ml-gsd';
import { broadenPeaks, gsd } from 'ml-gsd';
import { xMedianAbsoluteDeviation } from 'ml-spectra-processing/x';

import type { Chromatogram } from '../chromatogram.ts';

export interface ChromatogramPeak {
  from: number;
  to: number;
  width: number;
  retentionTime: number;
  intensity: number;
}

export interface GetPeaksOptions {
  /**
   * Filter all objects that are below `heightFilter` times the median of the height.
   * Peak height should be this factor times the noise (Median Absolute Deviation)
   * @default 5
   */
  heightFilter?: number;

  /**
   * Series to do the peak picking on
   * @default 'tic'
   */
  seriesName?: string;

  /**
   * @default { factor: 1, overlap: false }
   */
  broadenPeaksOptions?: BroadenPeaksOptions;
}

/**
 * Returns the result of a peak picking in the chromatogram
 *
 * Make a peak picking on a chromatogram is not obvious because the baseline is often not close to 0
 * and it is therefore difficult to filter by height.
 * We will therefore consider as height of a peak 2 times the height between the top and the middle
 * of the inflection points.
 *
 * In order to calculate the noise the same problem occurs, baseline is not horizontal.
 * We therefore calculate the median absolute deviation after baseline correction using airpls.
 * This noise will be used to filter the peak based on the 'heightFilter'.
 * @param chromatogram
 * @param options
 * @returns
 */
export function getPeaks(
  chromatogram: Chromatogram,
  options: GetPeaksOptions = {},
): ChromatogramPeak[] {
  const {
    heightFilter = 5,
    seriesName = 'tic',
    broadenPeaksOptions = { factor: 1, overlap: false },
  } = options;

  const series = chromatogram.getSeries1D(seriesName).getData();
  const times = chromatogram.getTimes();
  const dataXY = { x: times, y: series };
  // first peak selection
  let peakList = gsd(dataXY, {
    noiseLevel: 0,
    realTopDetection: false,
    smoothY: true,
    sgOptions: { windowSize: 5, polynomial: 2 },
  });

  const noiseHeight =
    xMedianAbsoluteDeviation(airpls(dataXY.x, dataXY.y).corrected).mad *
    heightFilter;

  peakList = peakList.filter(
    (peak) =>
      (peak.y -
        (dataXY.y[peak.inflectionPoints.from.index] +
          dataXY.y[peak.inflectionPoints.to.index]) /
          2) *
        2 >
      noiseHeight,
  );

  peakList.sort((a, b) => a.x - b.x);

  const broadenPeaksList = broadenPeaks(peakList, broadenPeaksOptions);

  return broadenPeaksList.map((peak) => ({
    from: peak.from.x,
    to: peak.to.x,
    width: peak.width,
    retentionTime: peak.x,
    intensity: peak.y,
  }));
}
