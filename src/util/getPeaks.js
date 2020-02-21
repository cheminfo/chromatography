import { gsd, post } from 'ml-gsd';
import median from 'ml-array-median';
/**
 * Apply the GSD peak picking algorithm
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the peak picking
 * @param {object} [options] - Options object
 * @param {number} [options.heightFilter = 2] - Filter all objects that are below `heightFilter` times the median of the height
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

  // filter height by factor
  let medianHeight = median(serie);

  peakList = peakList.filter((val) => val.height > medianHeight * heightFilter);

  let { factor = 1, overlap = false } = broadenPeaks;
  post.broadenPeaks(peakList, {
    factor,
    overlap,
  });

  peakList.sort((a, b) => a.x - b.x);

  return peakList.map((peak) => ({
    from: Math.min(peak.from, peak.to),
    to: Math.max(peak.from, peak.to),
    fromIndex: Math.min(peak.left.index, peak.right.index),
    toIndex: Math.max(peak.left.index, peak.right.index),
    x: peak.x,
    y: peak.y,
    index: peak.index,
  }));
}
