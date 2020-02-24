import max from 'ml-array-max';

/**
 * Calculate bpc
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the peak picking
 * @return {Array} - Calculated bpc
 */
export function calculateBpc(chromatogram) {
  let ms = chromatogram.getSeries('ms');
  if (!ms) {
    throw new Error('The mass series must be defined');
  }
  let massSpectra = ms.data;
  let bpc = [];
  for (let massSpectrum of massSpectra) {
    if (massSpectrum[1].length > 0) {
      bpc.push(max(massSpectrum[1]));
    } else {
      bpc.push(0);
    }
  }

  return bpc;
}
