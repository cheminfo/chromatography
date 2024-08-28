import arrayMax from 'ml-array-max';

import { seriesFromArray } from '../seriesFromArray';

export function percentageFilter(chromatogram, seriesName, options = {}) {
  const { percentage = 0.1 } = options;

  let series = chromatogram.getSeries(seriesName);
  let filtered = [];

  for (let i = 0; i < series.data.length; i++) {
    filtered.push(applyFilter(series.data[i], percentage));
  }

  return seriesFromArray(filtered);
}

function applyFilter(series, percentage) {
  let basePeak;
  try {
    basePeak = arrayMax(series[1]);
  } catch {
    basePeak = 0;
  }
  let filtered = [[], []];
  for (let i = 0; i < series[0].length; i++) {
    if (series[1][i] > percentage * basePeak) {
      filtered[0].push(series[0][i]);
      filtered[1].push(series[1][i]);
    }
  }
  return filtered;
}
