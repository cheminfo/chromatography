import { IsotopicDistribution } from 'isotopic-distribution';
import { generateMFs } from 'mf-generator';
import { xyObjectSlotX } from 'ml-spectra-processing/xyObject';

import type { Chromatogram } from '../chromatogram.ts';

export interface CalculateForMFOptions {
  /**
   * Name of the series where the result will be stored.
   * Defaults to an automatically generated name.
   */
  seriesName?: string;

  /**
   * Retrieve result from cache if it exists.
   * @default `false`
   */
  cache?: boolean;

  /**
   * Force replacement of existing series.
   * If `false`, trying to add an already existing series will throw an error.
   * @default `false`
   */
  force?: boolean;

  /**
   * Width of the slot around the mass of `targetMF`.
   * @default 1
   */
  slotWidth?: number;

  /**
   * Minimal height for peaks.
   * @default 0.5
   */
  threshold?: number;

  /**
   * List of allowed ionisations.
   * @default 'H+'
   */
  ionizations?: string;
}

/**
 * Calculate tic for specific molecular formula and ionizations
 *
 * The system will take all the peaks with an intensity over 5% (default value)
 * @param chromatogram - GC/MS chromatogram where make the peak picking
 * @param targetMF - mass for which to extract the spectrum
 * @param options
 * @returns Calculated mass for targetMass
 */
export async function calculateForMF(
  chromatogram: Chromatogram,
  targetMF: string,
  options: CalculateForMFOptions = {},
): Promise<number[]> {
  const { threshold = 0.05, slotWidth = 1, ionizations = 'H+' } = options;

  if (typeof targetMF !== 'string') {
    throw new Error('targetMF must be defined and a string');
  }

  const mfInfos = await generateMFs([targetMF]);
  const mfs = mfInfos.map((info: { mf: string }) => info.mf);

  const halfWidth = slotWidth / 2;

  const ms = chromatogram.getSeries2D('ms');

  let masses: Array<{ x: number; y: number }> = [];
  for (const mf of mfs) {
    const isotopicDistribution = new IsotopicDistribution(mf, {
      ionizations,
    });
    // we add isotopicDistribution in all the parts
    isotopicDistribution.getDistribution();

    const parts = isotopicDistribution.getParts();

    // @ts-expect-error It seems that IsotopicDistributionPart is not correctly typed.
    masses = masses.concat(...parts.map((part) => part.isotopicDistribution));
  }

  masses.sort((a, b) => a.x - b.x);
  masses = xyObjectSlotX(masses, { slotWidth }).filter(
    (mass) => mass.y > threshold,
  );

  const massSpectra = ms.getData();
  const result = new Array<number>(massSpectra.length).fill(0);
  for (const targetMass of masses) {
    for (let i = 0; i < massSpectra.length; i++) {
      const massSpectrum = massSpectra[i];
      for (let j = 0; j < massSpectrum[0].length; j++) {
        if (Math.abs(massSpectrum[0][j] - targetMass.x) <= halfWidth) {
          result[i] += massSpectrum[1][j];
        }
      }
    }
  }
  return result;
}
