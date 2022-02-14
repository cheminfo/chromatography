/**
 * Calculate the Extracted Ion Chromatogram
 * @param {object} chromatogram
 * @param {string|number} targetMass
 * @param {object} [options={}]
 * @param {number} [options.slotWidth=1]
 * @returns
 */

export function calculateEic(chromatogram, targetMass, options = {}) {
  const { slotWidth = 1 } = options;
  if (!targetMass) {
    throw new Error(
      'targetMass must be defined and a number or string of comma separated numbers',
    );
  }
  let targetMasses;
  if (!Number.isNaN(Number(targetMass))) {
    targetMasses = [Number(targetMass)];
  } else if (typeof targetMass === 'string') {
    targetMasses = targetMass
      .split(/[ ,;\r\n\t]+/)
      .map((value) => Number(value));
  }
  for (let mass of targetMasses) {
    if (isNaN(mass)) {
      throw new Error(
        'targetMass must be defined and a number or string of comma separated numbers',
      );
    }
  }

  const halfWidth = slotWidth / 2;
  const ms = chromatogram.getSeries('ms');
  const massSpectra = ms.data;

  const result = new Array(massSpectra.length).fill(0);
  for (let mass of targetMasses) {
    for (let i = 0; i < massSpectra.length; i++) {
      let massSpectrum = massSpectra[i];
      for (let j = 0; j < massSpectrum[0].length; j++) {
        if (Math.abs(massSpectrum[0][j] - mass) <= halfWidth) {
          result[i] += massSpectrum[1][j];
        }
      }
    }
  }

  return result;
}
