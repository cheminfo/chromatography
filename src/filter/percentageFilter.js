import arrayMax from 'ml-array-max';
import { serieFromArray } from '../serieFromArray';

export function percentageFilter(chromatogram, serieName, options = {}) {
  const {
    percentage = 0.1
  } = options;

  var serie = chromatogram.getSerie(serieName);
  var filtered = [];

  for (var i = 0; i < serie.data.length; i++) {
    filtered.push(applyFilter(serie.data[i], percentage));
  }

  return serieFromArray(filtered);
}

function applyFilter(serie, percentage) {
  var basePeak;
  try {
    basePeak = arrayMax(serie[1]);
  } catch (e) {
    basePeak = 0;
  }
  var filtered = [[], []];
  for (var i = 0; i < serie[0].length; i++) {
    if (serie[1][i] > percentage * basePeak) {
      filtered[0].push(serie[0][i]);
      filtered[1].push(serie[1][i]);
    }
  }
  return filtered;
}
