import { gsd, post } from 'ml-gsd';
import median from 'ml-array-median';

export function getPeaks(chromatogram, options = {}) {
  const { heightFilter = 2, seriesName = 'tic', broadenPeaks = {} } = options;

  const series = chromatogram.getSeries(seriesName).data;
  const times = chromatogram.getTimes();

  // first peak selection
  let peakList = gsd(times, series, {
    noiseLevel: 0,
    realTopDetection: false,
    smoothY: true,
    sgOptions: { windowSize: 5, polynomial: 2 },
    heightFactor: 2,
    boundaries: true,
  });

  // filter height by factor
  let medianHeight = median(series);

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
