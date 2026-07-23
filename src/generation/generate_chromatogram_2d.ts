import type { DataXY, DoubleArray } from 'cheminfo-types';

import { combineMassSpectra } from './combine_mass_spectra.ts';
import type {
  GenerateChromatogram1DOptions,
  GenerateChromatogram1DPeak,
} from './generate_chromatogram_1d.ts';
import { generateChromatogram1D } from './generate_chromatogram_1d.ts';
import { generateMassSpectra } from './generate_mass_spectra.ts';

interface GenerateChromatogram2DPeak extends GenerateChromatogram1DPeak {
  /**
   * The pure mass spectrum for this peak.
   */
  ms: DataXY<DoubleArray>;
}

type GenerateChromatogram2DOptions = GenerateChromatogram1DOptions;

/**
 * Generate 2D chromatographic data from a list of peaks.
 * @param peaks - The list of peaks to include in the chromatogram.
 * @param options - Information about the chromatographic range to generate.
 * @returns The generated chromatographic data (times and mass spectra).
 */
export function generateChromatogram2D(
  peaks: GenerateChromatogram2DPeak[],
  options: GenerateChromatogram2DOptions,
) {
  const [firstPeak, ...otherPeaks] = peaks;

  const firstGc = generateChromatogram1D([firstPeak], options);

  const massSpectra = generateMassSpectra(firstPeak.ms, firstGc.intensities);

  for (const otherMolecule of otherPeaks) {
    const otherGc = generateChromatogram1D([otherMolecule], options);
    const otherMassSpectra = generateMassSpectra(
      otherMolecule.ms,
      otherGc.intensities,
    );
    for (let i = 0; i < massSpectra.length; i++) {
      massSpectra[i] = combineMassSpectra(massSpectra[i], otherMassSpectra[i]);
    }
  }

  return {
    times: firstGc.times,
    ms: massSpectra,
  };
}
