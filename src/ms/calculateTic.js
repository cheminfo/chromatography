import sum from 'ml-array-sum';

/**
 * Calculate tic
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the peak picking
 * @return {Array} - Calculated tic
 */
export function calculateTic(chromatogram) {
  let ms = chromatogram.getSerie('ms');
  if (!ms) {
    throw new Error('The mass serie must be defined');
  }
  let massSpectra = ms.data;
  let tic = [];
  for (let massSpectrum of massSpectra) {
    if (massSpectrum[1].length > 0) {
      tic.push(sum(massSpectrum[1]));
    } else {
      tic.push(0);
    }
  }

  return tic;
}
