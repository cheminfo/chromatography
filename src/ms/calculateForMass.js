/**
 * Calculate tic
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the peak picking
 * @param {number} targetMass - mass for which to extract the spectrum
 * @param {object} [options={}]
 * @param {number} [options.error=0.5] - Allowed error around the targetMass
 * @return {Array} - Calculated mass for targetMass
 */
export function calculateForMass(chromatogram, targetMass, options = {}) {
  if (isNaN(targetMass)) {
    throw Error('calculateForMass: targetMass must be defined and a number');
  }
  const { error = 0.5 } = options;
  let ms = chromatogram.getSerie('ms');
  if (!ms) {
    throw Error('calculateForMass: the mass serie must be defined');
  }
  var massSpectra = ms.data;
  var result = new Array(massSpectra.length).fill(0);
  for (let i = 0; i < massSpectra.length; i++) {
    let massSpectrum = massSpectra[i];
    for (let j = 0; j < massSpectrum[0].length; j++) {
      if (Math.abs(massSpectrum[0][j] - targetMass) <= error) {
        result[i] += massSpectrum[1][j];
      }
    }
  }

  return result;
}
