import { xSum } from 'ml-spectra-processing/x';

import type { Chromatogram } from '../chromatogram.ts';

export function calculateTic(chromatogram: Chromatogram) {
  const ms = chromatogram.getSeries2D('ms');
  const massSpectra = ms.getData();
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
