import { xMaxValue } from 'ml-spectra-processing/x';

import type { MassSpectrum } from './vectorify.ts';

export interface KovatsOptions {
  /**
   * @default `0.01`
   */
  threshold?: number;
}

export interface KovatsResult {
  /**
   * Kovats retention index.
   */
  index: number;

  /**
   * Number of fragments.
   */
  numberFragments: number;

  /**
   * Percentage of fragments.
   */
  percentFragments: number;
}

/**
 * Calculates the Kovats retention index for a mass spectra of a n-alkane
 * @param ms - A mass spectra object
 * @param options
 * @returns Kovats retention index
 */
export function kovats(
  ms: MassSpectrum,
  options: KovatsOptions = {},
): KovatsResult | null {
  const { threshold = 0.01 } = options;
  // we normalize the data and filter them
  const maxY = xMaxValue(ms.y);
  const masses = [];
  const intensities = [];
  for (let i = 0; i < ms.x.length; i++) {
    if (ms.y[i] / maxY > threshold) {
      masses.push(ms.x[i]);
      intensities.push(ms.y[i] / maxY);
    }
  }

  // we find candidates
  const nbAlcaneMasses = [];
  let fragmentMasses = [];

  for (const mass of masses) {
    if ((mass - 2) % 14 === 0) {
      nbAlcaneMasses.push(mass);
    }
    if ((mass - 1) % 14 === 0) {
      fragmentMasses.push(mass);
    }
  }

  if (nbAlcaneMasses.length === 0) return null;

  const biggestMass = nbAlcaneMasses.sort((a, b) => b - a)[0];
  fragmentMasses = fragmentMasses.filter((mass) => mass < biggestMass);

  return {
    index: (100 * (biggestMass - 2)) / 14,
    numberFragments: fragmentMasses.length,
    percentFragments: fragmentMasses.length / ((biggestMass - 2) / 14),
  };
}
