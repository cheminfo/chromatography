import { xSum } from 'ml-spectra-processing/x';

export function calculateTic(chromatogram) {
  const ms = chromatogram.getSeries('ms');
  const massSpectra = ms.data;
  const tic = [];
  for (const massSpectrum of massSpectra) {
    if (massSpectrum[1].length > 0) {
      tic.push(xSum(massSpectrum[1]));
    } else {
      tic.push(0);
    }
  }

  return tic;
}
