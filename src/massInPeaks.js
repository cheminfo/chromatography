import {massFilter} from './massFilter';
import {integrate2D} from './util/integrate2D';

/**
 * Integrate MS spectra of a peak list
 * @param {Array<object>} peakList - List of GSD objects
 * @param {Array<object>} sampleMS - MS array of GC spectra
 * @param {object} options - Options for the integral filtering
 * @param {number} [options.thresholdFactor = 0] - Every peak that it's bellow the main peak times this factor fill be removed (when is 0 there's no filter)
 * @param {number} [options.maxNumberPeaks = Number.MAX_VALUE] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
 * @param {number} [options.groupWidth = 0] - When find a max can't be another max in a radius of this size
 * @return {Array<object>} - List of GSD objects with an extra 'ms' field with the integrated MS spectra
 */
export function massInPeaks(peakList, sampleMS, options = {}) {
    // integrate MS
    for (let i = 0; i < peakList.length; ++i) {
        var serie = {dimension: 2, data: sampleMS};
        var integral = integrate2D(serie, peakList[i].left.index, peakList[i].right.index, 0);
        var msSum = {
            x: integral[0],
            y: integral[1]
        };

        if (options.maxNumberPeaks || options.thresholdFactor || options.groupWidth) {
            msSum = massFilter(msSum, options);
        }
        peakList[i].ms = msSum;
    }

    return peakList;
}
