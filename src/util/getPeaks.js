import { gsd, post } from 'ml-gsd';

/**
 * Apply the GSD peak picking algorithm
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the peak picking
 * @param {object} [options] - Options object
 * @param {number} [options.heightFilter = 2] - Filter all objects that are bellow `heightFilter` times the median of the height
 * @param {string} [options.serieName = 'tic'] - Serie to do the peak picking
 * @param {object} [options.broadenPeaks = {}] - Options to broadenPeaks
 * @param {number} [options.broadenPeaks.factor = 1] - factor to enlarge
 * @param {boolean} [options.broadenPeaks.overlap = false] - Prevent overlap kf false
 * @return {Array<object>} - List of GSD objects
 */
export function getPeaks(chromatogram, options = {}) {
  const { heightFilter = 2, serieName = 'tic', broadenPeaks = {} } = options;

  let serie = chromatogram.getSerie(serieName);
  if (!serie) {
    throw new Error(`"${serieName}" serie not founded`);
  }
  serie = serie.data;
  let times = chromatogram.getTimes();

  // first peak selection
  let peakList = gsd(times, serie, {
    noiseLevel: 0,
    realTopDetection: false,
    smoothY: true,
    sgOptions: { windowSize: 5, polynomial: 2 },
    heightFactor: 2,
    boundaries: true,
  });

  peakList.sort(
    (a, b) => a.right.index - a.left.index - (b.right.index - b.left.index),
  );
  let medianDotsWidth = peakList[Math.floor((peakList.length - 1) / 2)];
  medianDotsWidth = medianDotsWidth.right.index - medianDotsWidth.left.index;

  // reset parameters
  if (medianDotsWidth < 5) {
    medianDotsWidth = 5;
  }
  if (medianDotsWidth % 2 === 0) {
    medianDotsWidth -= 1;
  }

  // second peak selection
  peakList = gsd(times, serie, {
    noiseLevel: 0,
    realTopDetection: false,
    smoothY: true,
    sgOptions: { windowSize: medianDotsWidth, polynomial: 2 },
    heightFactor: 2,
    boundaries: true,
  });

  peakList.sort((a, b) => a.height - b.height);

  // filter height by factor
  let medianHeight = peakList[Math.floor((peakList.length - 1) / 2)].height;
  peakList = peakList.filter((val) => val.height > medianHeight * heightFilter);

  let { factor = 1, overlap = false } = broadenPeaks;

  post.broadenPeaks(peakList, {
    factor,
    overlap,
  });

  return peakList;
}
