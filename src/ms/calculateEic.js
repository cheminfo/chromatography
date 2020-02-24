export function calculateEic(chromatogram, targetMass, options = {}) {
  if (isNaN(targetMass)) {
    throw new Error('targetMass must be defined and a number');
  }
  if (!isNaN(targetMass)) {
    targetMass = [targetMass];
  } else if (typeof targetMass === 'string') {
    targetMass = targetMass.split(/[ ,;\r\n\t]+/).map((value) => Number(value));
  }
  const { slotWidth = 1 } = options;
  const halfWidth = slotWidth / 2;
  const ms = chromatogram.getSeries('ms');
  const massSpectra = ms.data;

  const result = new Array(massSpectra.length).fill(0);
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
