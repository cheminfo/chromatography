import max from 'ml-array-max';

/**
 * Calculate bpc
 * @param {Chromatogram} chrom - GC/MS chromatogram where make the peak picking
 * @return {Array} - Calculated bpc
 */
export function calculateBpc(chrom) {
  let ms = chrom.getSerie('ms');
  if (!ms) {
    throw new Error('The mass serie must be defined');
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
