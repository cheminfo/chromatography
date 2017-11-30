/**
 * Calculate the number of points of each related information
 * @param {Chromatogram} chrom - GC/MS chromatogram where make the peak picking
 * @param {string} serieName - name of the serie
 * @return {Array} - Calculated length of the 2D array
 */
export function calculateLength(chrom, serieName) {
    let serie2D = chrom.getSerie(serieName);
    var spectra = serie2D.data;
    var length = spectra.map((spectrum) => spectrum[0].length);
    return length;
}
