import IsotopicDistribution from 'isotopic-distribution';
import { xyObjectSlotX } from 'ml-spectra-processing';
/**
 * Calculate tic for specific molecular formula and ionizations
 *
 * The system will take all the peaks with an intensity over 5% (default value)
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the peak picking
 * @param {string} targetMF - mass for which to extract the spectrum
 * @param {object} [options={}]
 * @param {number} [options.slotWidth=1] - Width of the slot around the mass of targetMF
 * @param {number} [options.threshold=0.05] - Minimal height for peaks
 * @param {number} [options.ionizations='H+'] - List of allowed ionisation
 * @return {Array} - Calculated mass for targetMass
 */
export function calculateForMF(chromatogram, targetMF, options = {}) {
  if (typeof targetMF !== 'string') {
    throw Error('targetMF must be defined and a string');
  }
  const { threshold = 0.05, slotWidth = 1, ionizations = 'H+' } = options;

  const halfWidth = slotWidth / 2;

  const ms = chromatogram.getSeries('ms');

  let isotopicDistribution = new IsotopicDistribution(targetMF, {
    ionizations,
  });
  // we add isotopicDistribution in all the parts
  isotopicDistribution.getDistribution();

  let parts = isotopicDistribution.getParts();

  let masses = [].concat(...parts.map((part) => part.isotopicDistribution));
  masses.sort((a, b) => a.x - b.x);
  masses = xyObjectSlotX(masses, { slotWidth }).filter(
    (mass) => mass.y > threshold,
  );

  let massSpectra = ms.data;
  let result = new Array(massSpectra.length).fill(0);
  for (let targetMass of masses) {
    for (let i = 0; i < massSpectra.length; i++) {
      let massSpectrum = massSpectra[i];
      for (let j = 0; j < massSpectrum[0].length; j++) {
        if (Math.abs(massSpectrum[0][j] - targetMass.x) <= halfWidth) {
          result[i] += massSpectrum[1][j];
        }
      }
    }
  }
  return result;
}
