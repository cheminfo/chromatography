import { MF } from 'mf-parser';

import type { Chromatogram } from '../chromatogram.ts';

export interface ApplyLockMassOptions {
  /**
   * Whether the reference is in the odd position.
   * @default `true`
   */
  oddReference?: boolean;

  /**
   * Maximum allowed shift
   * @default `0.1`
   */
  maxShift?: number;
}

export interface LockMassReferenceUsed {
  total: number;
  totalFound: number;
  percent: number;
  mfs: Record<string, number>;
}

export function applyLockMass(
  chromatogram: Chromatogram,
  mfs: string | string[],
  options: ApplyLockMassOptions = {},
): LockMassReferenceUsed {
  const { oddReference = true, maxShift = 0.1 } = options;

  // allows mf as string or array
  if (typeof mfs === 'string') {
    mfs = [mfs];
  }

  // calculate the mass reference values
  const referenceMass = mfs.map((mf) => {
    const info = new MF(mf).getInfo();
    return info.observedMonoisotopicMass || info.monoisotopicMass;
  });

  const ms = chromatogram.getSeries2D('ms').getData();

  // check where is the reference values
  const referenceIndexShift = Number(oddReference);
  const msIndexShift = Number(!oddReference);
  const newSize = ms.length >> 1;
  const referencesCount = new Array<number>(referenceMass.length).fill(0);

  // applying the changes for all the spectra
  let previousValidDifference = Number.MAX_VALUE;
  let usingPreviousValidDifference = false;
  for (let i = 0; i < newSize; i++) {
    const massIndex = 2 * i + msIndexShift;
    const referenceIndex = 2 * i + referenceIndexShift;

    // calculate the difference between theory and experimental (the smallest)
    let difference = Number.MAX_VALUE;
    let closestIndex = -1;
    for (let j = 0; j < referenceMass.length; j++) {
      for (const mass of ms[referenceIndex][0]) {
        if (Math.abs(difference) > Math.abs(referenceMass[j] - mass)) {
          difference = referenceMass[j] - mass;
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
      if (!usingPreviousValidDifference && closestIndex !== -1) {
        referencesCount[closestIndex] += 1;
      }
      for (let m = 0; m < ms[massIndex][0].length; m++) {
        ms[massIndex][0][m] += difference;
      }
    }
  }

  const referenceUsed: LockMassReferenceUsed = {
    total: newSize,
    totalFound: referencesCount.reduce((prev, current) => current + prev, 0),
    mfs: {},
    percent: 0,
  };
  for (let r = 0; r < referenceMass.length; r++) {
    referenceUsed.mfs[mfs[r]] = referencesCount[r];
  }
  referenceUsed.percent =
    (referenceUsed.totalFound / referenceUsed.total) * 100;

  // remove the time and the mass spectra that contains the reference
  chromatogram.filter((index) => index % 2 !== referenceIndexShift);

  return referenceUsed;
}
