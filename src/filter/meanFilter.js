import arrayMean from 'ml-array-mean';

import { serieFromArray } from '../serieFromArray';

export function meanFilter(chromatogram, serieName, options = {}) {
  const { factor = 2 } = options;

  let serie = chromatogram.getSerie(serieName);
  let filtered = [];
  for (let i = 0; i < serie.data.length; i++) {
    filtered.push(applyFilter(serie.data[i], factor));
  }

  return serieFromArray(filtered);
}

function applyFilter(serie, factor) {
  let filtered = [[], []];
  if (serie[1].length === 0) return filtered;
  const meanIntensity = factor * arrayMean(serie[1]);
  for (let i = 0; i < serie[0].length; i++) {
    if (serie[1][i] > meanIntensity) {
      filtered[0].push(serie[0][i]);
      filtered[1].push(serie[1][i]);
    }
  }
  return filtered;
}
