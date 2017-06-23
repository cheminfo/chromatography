import max from 'ml-array-max';

/**
 * Calculate bpc
 * @param {Chromatogram} chrom - GC/MS chromatogram where make the peak picking
 * @return {Array} - Calculated bpc
 */
export function calculateBpc(chrom) {
    let ms = chrom.getSerie('ms');
    if (!ms) {
        throw new Error('The mass serie must be defined');
    }
    var massSpectra = ms.data;
    var bpc = [];
    for (var massSpectrum of massSpectra) {
        bpc.push(max(massSpectrum[1]));
    }

    return bpc;
}
