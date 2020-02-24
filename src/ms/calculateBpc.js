import max from 'ml-array-max';

/**
 * Calculate bpc
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the peak picking
 * @return {Array} - Calculated bpc
 */
export function calculateBpc(chromatogram) {
  const ms = chromatogram.getSeries('ms');
  const massSpectra = ms.data;
  const bpc = [];
  for (const massSpectrum of massSpectra) {
    if (massSpectrum[1].length > 0) {
      bpc.push(max(massSpectrum[1]));
    } else {
      bpc.push(0);
    }
  }

  return bpc;
}
