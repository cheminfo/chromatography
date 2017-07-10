import {massFilter} from './massFilter';
import {_merge} from './util/merge';

/**
 * Integrate MS spectra of a peak list
 * @param {Array<object>} peakList - List of GSD objects
 * @param {Array<object>} sampleMS - MS array of GC spectra
 * @param {object} options - Options for the integral filtering
 * @param {number} [options.thresholdFactor = 0] - Every peak that it's bellow the main peak times this factor fill be removed (when is 0 there's no filter)
 * @param {number} [options.maxNumberPeaks = Number.MAX_VALUE] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
 * @param {number} [options.groupWidth = 0] - When find a max can't be another max in a radius of this size
 * @param {number} [options.slot = 1] - When to merge two mass values intensities
 * @param {number} [options.method = 'slot'] - Mass combination method
 * @return {Array<object>} - List of GSD objects with an extra 'ms' field with the integrated MS spectra
 */
export function massInPeaks(peakList, sampleMS, options = {}) {
    const {
        thresholdFactor = 0,
        maxNumberPeaks = Number.MAX_VALUE,
        groupWidth = 0,
        slot = 1,
        method = 'slot'
    } = options;

    // integrate MS
    for (let i = 0; i < peakList.length; ++i) {
        var serie = {dimension: 2, data: sampleMS};
        var integral = _merge(serie, peakList[i].left.index, peakList[i].right.index, slot, method);
        var msSum = {
            x: integral[0],
            y: integral[1]
        };

        if (maxNumberPeaks || thresholdFactor || groupWidth) {
            msSum = massFilter(msSum, {maxNumberPeaks, thresholdFactor, groupWidth});
        }
        peakList[i].ms = msSum;
    }

    return peakList;
}
