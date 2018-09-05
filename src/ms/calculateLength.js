/**
 * Calculate the number of points of each related information
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the peak picking
 * @param {string} serieName - name of the serie
 * @return {Array} - Calculated length of the 2D array
 */
export function calculateLength(chromatogram, serieName) {
  let serie2D = chromatogram.getSerie(serieName);
  var spectra = serie2D.data;
  var length = spectra.map((spectrum) => spectrum[0].length);
  return length;
}
