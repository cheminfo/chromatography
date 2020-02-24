import arrayMean from 'ml-array-mean';

import { seriesFromArray } from '../seriesFromArray';

export function meanFilter(chromatogram, seriesName, options = {}) {
  const { factor = 2 } = options;

  let series = chromatogram.getSeries(seriesName);
  let filtered = [];
  for (let i = 0; i < series.data.length; i++) {
    filtered.push(applyFilter(series.data[i], factor));
  }

  return seriesFromArray(filtered);
}

function applyFilter(series, factor) {
  let filtered = [[], []];
  if (series[1].length === 0) return filtered;
  const meanIntensity = factor * arrayMean(series[1]);
  for (let i = 0; i < series[0].length; i++) {
    if (series[1][i] > meanIntensity) {
      filtered[0].push(series[0][i]);
      filtered[1].push(series[1][i]);
    }
  }
  return filtered;
}
