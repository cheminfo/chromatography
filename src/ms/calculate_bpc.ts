import { xMaxValue } from 'ml-spectra-processing/x';

import type { Chromatogram } from '../chromatogram.ts';

/**
 * Calculate bpc
 * @param chromatogram - GC/MS chromatogram where make the peak picking
 * @returns Calculated bpc
 */
export function calculateBpc(chromatogram: Chromatogram) {
  const ms = chromatogram.getSeries2D('ms');
  const massSpectra = ms.getData();
  const bpc = [];
  for (const massSpectrum of massSpectra) {
    if (massSpectrum[1].length > 0) {
      bpc.push(xMaxValue(massSpectrum[1]));
    } else {
      bpc.push(0);
    }
  }

  return bpc;
}
