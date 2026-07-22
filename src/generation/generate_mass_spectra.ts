import type { DataXY, DoubleArray } from 'cheminfo-types';

/**
 * Generate mass spectra for a range of intensities by scaling the pure MS with
 * each intensity. Slots with an intensity of zero will contain empty mass spectra.
 * @param massSpectrum - The pure mass spectrum.
 * @param intensities - The scaling intensities.
 * @returns An array of mass spectra.
 */
export function generateMassSpectra(
  massSpectrum: DataXY<DoubleArray>,
  intensities: DoubleArray,
): Array<DataXY<DoubleArray>> {
  const massSpectra: Array<DataXY<DoubleArray>> = [];
  for (const intensity of intensities) {
    if (intensity === 0) {
      massSpectra.push({ x: [], y: [] });
    } else {
      const newX = massSpectrum.x.slice();
      const newY = massSpectrum.y.map((value) => value * intensity);
      massSpectra.push({ x: newX, y: newY });
    }
  }
  return massSpectra;
}
