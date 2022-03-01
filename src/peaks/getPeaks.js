import median from 'ml-array-median';
import { gsd, broadenPeaks } from 'ml-gsd';

export function getPeaks(chromatogram, options = {}) {
  const {
    heightFilter = 2,
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

  // filter height by factor
  let medianHeight = median(series);

  peakList = peakList.filter((val) => val.y > medianHeight * heightFilter);

  peakList.sort((a, b) => a.x - b.x);

  if (broadenPeaksOptions) {
    peakList = broadenPeaks(peakList, broadenPeaksOptions);
  }

  return peakList.map((peak) => ({
    from: peak.x - peak.width / 2,
    to: peak.x + peak.width / 2,
    inflectionPoints: peak.inflectionPoints,
    retentionTime: peak.x,
    intensity: peak.y,
  }));
}
