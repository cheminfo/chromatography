import { gsd } from 'ml-gsd/src/gsd';
import { broadenPeaks } from 'ml-gsd/src/post/broadenPeaks';
import median from 'ml-array-median';

export function getPeaks(chromatogram, options = {}) {
  const {
    heightFilter = 2,
    seriesName = 'tic',
    broadenPeaksOptions = { factor: 1, overlap: false },
  } = options;

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

  if (broadenPeaksOptions) {
    peakList = broadenPeaks(peakList, broadenPeaksOptions);
  }

  return peakList.map((peak) => ({
    from: peak.from,
    to: peak.to,
    inflectionPoints: {
      from: Math.min(peak.left.x, peak.right.x),
      to: Math.max(peak.left.x, peak.right.x),
    },
    retentionTime: peak.x,
    intensity: peak.y,
  }));
}
