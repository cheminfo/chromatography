import type { Chromatogram } from '../chromatogram.ts';

export function calculateLength(
  chromatogram: Chromatogram,
  seriesName: string,
) {
  const series2D = chromatogram.getSeries2D(seriesName);
  const spectra = series2D.getData();
  return spectra.map((spectrum) => spectrum[0].length);
}
