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
  var massSpectra = ms.data;
  var tic = [];
  for (var massSpectrum of massSpectra) {
    tic.push(massSpectrum[1].reduce((a, b) => a + b, 0));
  }

  return tic;
}
