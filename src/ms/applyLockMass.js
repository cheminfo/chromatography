import { MF } from 'mf-parser';

/**
 * Recalculates series for GC/MS with lock mass
 * @param {string|Array<string>} mf - Reference molecular formula(s)
 * @param {object} [options = {}] - Options object
 * @param {boolean} [options.oddReference = true] - Mass reference it's in the odd position
 * @param {number} [options.maxShift = 0.1] - Maximum allowed shift
 * @param {boolean} [options.usePreviousIfNotFound = true] - If not found we use the previous value
 * @return {object} this
 */
export function applyLockMass(mf, options = {}) {
  const { oddReference = true, maxShift = 0.1 } = options;

  // allows mf as string or array
  if (typeof mf === 'string') {
    mf = [mf];
  }

  // calculate the mass reference values
  const referenceMass = mf.map((mf) => {
    let info = new MF(mf).getInfo();
    return info.observedMonoisotopicMass || info.monoisotopicMass;
  });

  let ms = this.getSerie('ms');
  if (!ms) {
    throw new Error('The "ms" serie must be defined');
  }
  ms = ms.data;

  // check where is the reference values
  let referenceIndexShift = Number(oddReference);
  let msIndexShift = Number(!oddReference);
  const newSize = ms.length >> 1;
  let referencesCount = new Array(referenceMass.length).fill(0);

  // applying the changes for all the spectra
  let previousValidDifference = Number.MAX_VALUE;
  let usingPreviousValidDifference = false;
  for (let i = 0; i < newSize; i++) {
    let massIndex = 2 * i + msIndexShift;
    let referenceIndex = 2 * i + referenceIndexShift;

    // calculate the difference between theory and experimental (the smallest)
    let difference = Number.MAX_VALUE;
    let closestIndex = -1;
    for (let j = 0; j < referenceMass.length; j++) {
      for (let k = 0; k < ms[referenceIndex][0].length; k++) {
        if (
          Math.abs(difference) >
          Math.abs(referenceMass[j] - ms[referenceIndex][0][k])
        ) {
          difference = referenceMass[j] - ms[referenceIndex][0][k];
          closestIndex = j;
        }
      }
    }
    if (
      Math.abs(difference) > maxShift &&
      Math.abs(previousValidDifference) < maxShift
    ) {
      difference = previousValidDifference;
      usingPreviousValidDifference = true;
    } else {
      usingPreviousValidDifference = false;
    }
    // apply identified lock mass
    if (Math.abs(difference) < maxShift) {
      previousValidDifference = difference;
      if (!usingPreviousValidDifference) {
        if (closestIndex !== -1) {
          referencesCount[closestIndex] += 1;
        }
      }
      for (let m = 0; m < ms[massIndex][0].length; m++) {
        ms[massIndex][0][m] += difference;
      }
    }
  }

  let referenceUsed = {
    total: newSize,
    totalFound: referencesCount.reduce((prev, current) => current + prev, 0),
  };
  for (let r = 0; r < referenceMass.length; r++) {
    referenceUsed[mf[r]] = referencesCount[r];
  }
  referenceUsed.percent =
    (referenceUsed.totalFound / referenceUsed.total) * 100;

  // remove the time and the mass spectra that contains the reference
  this.filter((index) => index % 2 !== referenceIndexShift);

  return { chromatogram: this, referenceUsed };
}
