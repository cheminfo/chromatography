import { Util } from 'emdb';

/**
 * Calculate tic
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the peak picking
 * @param {string} targetMF - mass for which to extract the spectrum
 * @param {object} [options={}]
 * @param {number} [options.error=0.5] - Allowed error around the targetMF
 * @param {number} [options.ionizations='H+'] - List of allowed ionisation
 * @return {Array} - Calculated mass for targetMass
 */
export function calculateForMF(chromatogram, targetMF, options = {}) {
  if (typeof targetMF !== 'string') {
    throw Error('calculateForMF: targetMF must be defined and a string');
  }
  const { error = 0.5 } = options;

  let ms = chromatogram.getSerie('ms');
  if (!ms) {
    throw Error('calculateForMF: the mass serie must be defined');
  }

  var masses = new Util.IsotopicDistribution(targetMF, options)
    .getParts()
    .map((entry) => entry.ms.em);

  var massSpectra = ms.data;
  var result = new Array(massSpectra.length).fill(0);
  for (let targetMass of masses) {
    for (let i = 0; i < massSpectra.length; i++) {
      let massSpectrum = massSpectra[i];
      for (let j = 0; j < massSpectrum[0].length; j++) {
        if (Math.abs(massSpectrum[0][j] - targetMass) <= error) {
          result[i] += massSpectrum[1][j];
        }
      }
    }
  }
  return result;
}
