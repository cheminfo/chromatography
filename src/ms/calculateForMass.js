/**
 * Calculate tic
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the peak picking
 * @param {number|Array} targetMass - mass for which to extract the spectrum
 * @param {object} [options={}]
 * @param {number} [options.slotWidth=1] - Width of the slot around the targetMass
 * @return {Array} - Calculated mass for targetMass
 */
export function calculateForMass(chromatogram, targetMass, options = {}) {
  if (isNaN(targetMass)) {
    throw Error('calculateForMass: targetMass must be defined and a number');
  }
  if (!isNaN(targetMass)) {
    targetMass = [targetMass];
  } else if (typeof targetMass === 'string') {
    targetMass = targetMass.split(/[ ,;\r\n\t]+/).map((value) => Number(value));
  }
  const { slotWidth = 1 } = options;
  const halfWidth = slotWidth / 2;
  let ms = chromatogram.getSerie('ms');
  if (!ms) {
    throw Error('calculateForMass: the mass serie must be defined');
  }
  let massSpectra = ms.data;

  let result = new Array(massSpectra.length).fill(0);
  for (let i = 0; i < massSpectra.length; i++) {
    let massSpectrum = massSpectra[i];
    for (let j = 0; j < massSpectrum[0].length; j++) {
      if (Math.abs(massSpectrum[0][j] - targetMass) <= halfWidth) {
        result[i] += massSpectrum[1][j];
      }
    }
  }

  return result;
}
