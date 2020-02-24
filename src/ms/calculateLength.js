/**
 * Calculate the number of points of each related information
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the peak picking
 * @param {string} seriesName - name of the serie
 * @return {Array} - Calculated length of the 2D array
 */
export function calculateLength(chromatogram, seriesName) {
  let series2D = chromatogram.getSeries(seriesName);
  let spectra = series2D.data;
  let length = spectra.map((spectrum) => spectrum[0].length);
  return length;
}
