import max from 'ml-array-max';

/**
 * @typedef KovatsReturn
 * @type {object}
 * @property {number} index - Kovats retention index
 * @property {number} numberFragments - Number of fragments
 * @property {number} percentFragments - Percentage of fragments
 */

/**
 * Calculates the Kovats retention index for a mass spectra of a n-alkane
 * @param {object} ms - A mass spectra object
 * @param {Array<number>} ms.x - Array of masses
 * @param {Array<number>} ms.y - Array of intensities
 * @param options
 * @returns {KovatsReturn} - Kovats retention index
 */
export function kovats(ms, options = {}) {
  const { threshold = 0.01 } = options;
  // we normalize the data and filter them
  let maxY = max(ms.y);
  let masses = [];
  let intensities = [];
  for (let i = 0; i < ms.x.length; i++) {
    if (ms.y[i] / maxY > threshold) {
      masses.push(ms.x[i]);
      intensities.push(ms.y[i] / maxY);
    }
  }

  // we find candidates
  let nbAlcaneMasses = [];
  let fragmentMasses = [];

  for (let i = 0; i < masses.length; i++) {
    if ((masses[i] - 2) % 14 === 0) {
      nbAlcaneMasses.push(masses[i]);
    }
    if ((masses[i] - 1) % 14 === 0) {
      fragmentMasses.push(masses[i]);
    }
  }

  if (nbAlcaneMasses.length === 0) return {};

  let biggestMass = nbAlcaneMasses.sort((a, b) => b - a)[0];
  fragmentMasses = fragmentMasses.filter((mass) => mass < biggestMass);

  return {
    index: (100 * (biggestMass - 2)) / 14,
    numberFragments: fragmentMasses.length,
    percentFragments: fragmentMasses.length / ((biggestMass - 2) / 14),
  };
}
