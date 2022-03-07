import airpls from 'ml-airpls';
import { gsd, broadenPeaks } from 'ml-gsd';
import { xMedianAbsoluteDeviation } from 'ml-spectra-processing';

/**
 * Returns the result of a peak picking in the chromatogram
 *
 * Make a peak picking on a chromatogram is not obvious because the baseline is often not close to 0
 * and it is therefore difficult to filter by height.
 * We will therefore consider as height of a peak 2 times the height between the top and the middle of the inflection points.
 *
 * We therefore calculate 2 properties:
 * - the median that is expected ot be the
 *
 * @param {*} chromatogram
 * @param {object} [options={}]
 * @param {number} [options.heightFilter=2] Peak height should be this factor times the noise (Median Absolute Deviation)
 * @param {string} [options.seriesName='tic']
 * @param {object} [options.broadenPeaksOptions='tic']
 * @returns
 */

export function getPeaks(chromatogram, options = {}) {
  const {
    heightFilter = 5,
    seriesName = 'tic',
    broadenPeaksOptions = { factor: 1, overlap: false },
  } = options;

  const series = chromatogram.getSeries(seriesName).data;
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
