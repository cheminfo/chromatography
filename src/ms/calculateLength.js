export function calculateLength(chromatogram, seriesName) {
  const series2D = chromatogram.getSeries(seriesName);
  const spectra = series2D.data;
  const length = spectra.map((spectrum) => spectrum[0].length);
  return length;
}
