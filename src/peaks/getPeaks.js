import { gsd } from 'ml-gsd/src/gsd';
import median from 'ml-array-median';

export function getPeaks(chromatogram, options = {}) {
  const { heightFilter = 2, seriesName = 'tic' } = options;

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

  peakList.sort((a, b) => a.x - b.x);

  return peakList.map((peak) => ({
    from: Math.min(peak.left.x, peak.right.x),
    to: Math.max(peak.left.x, peak.right.x),
    fromIndex: Math.min(peak.left.index, peak.right.index),
    toIndex: Math.max(peak.left.index, peak.right.index),
    x: peak.x,
    y: peak.y,
    index: peak.index,
  }));
}
