import { xMaxValue } from 'ml-spectra-processing/x';

/**
 * Calculate bpc
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the peak picking
 * @returns {Array} - Calculated bpc
 */
export function calculateBpc(chromatogram) {
  const ms = chromatogram.getSeries('ms');
  const massSpectra = ms.data;
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
