import type { Chromatogram } from '../chromatogram.ts';

export interface CalculateEicOptions {
  /**
   * Name of the series where the result will be stored.
   * Defaults to an automatically generated name.
   */
  seriesName?: string;

  /**
   * Retrieve result from cache if it exists.
   * @default false
   */
  cache?: boolean;

  /**
   * Force replacement of existing series.
   * If `false`, trying to add an already existing series will throw an error.
   * @default false
   */
  force?: boolean;

  /**
   * Width of the slot around the target mass.
   * @default 1
   */
  slotWidth?: number;
}

/**
 * Calculate the Extracted Ion Chromatogram
 * @param chromatogram
 * @param targetMass
 * @param options
 * @returns
 */
export function calculateEic(
  chromatogram: Chromatogram,
  targetMass: number | number[] | string,
  options: CalculateEicOptions = {},
): number[] {
  const { slotWidth = 1 } = options;
  if (!targetMass) {
    throw new Error(
      'targetMass must be defined and a number or string of comma separated numbers',
    );
  }
  let targetMasses: number[];
  if (typeof targetMass === 'number') {
    targetMasses = [targetMass];
  } else if (typeof targetMass === 'string') {
    targetMasses = targetMass.split(/[\t\n\r ,;]+/).map(Number);
  } else {
    targetMasses = targetMass;
  }
  for (const mass of targetMasses) {
    if (Number.isNaN(mass)) {
      throw new Error(
        'targetMass must be defined and a number or string of comma separated numbers',
      );
    }
  }

  const halfWidth = slotWidth / 2;
  const ms = chromatogram.getSeries2D('ms');
  const massSpectra = ms.getData();

  const result = new Array<number>(massSpectra.length).fill(0);
  for (const mass of targetMasses) {
    for (let i = 0; i < massSpectra.length; i++) {
      const massSpectrum = massSpectra[i];
      for (let j = 0; j < massSpectrum[0].length; j++) {
        if (Math.abs(massSpectrum[0][j] - mass) <= halfWidth) {
          result[i] += massSpectrum[1][j];
        }
      }
    }
  }

  return result;
}
