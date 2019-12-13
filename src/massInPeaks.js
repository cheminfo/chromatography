import { massFilter } from './massFilter';
import { merge } from './util/merge';

/**
 * Append MS spectra to a peak list
 * @param {Array<object>} peakList - List of GSD objects
 * @param {Chromatogram} chromatogram
 * @param {object} [options={}] - Options for the integral filtering
 * @param {number} [options.threhold=0.3] - Every peak that it's bellow the main peak times this factor fill be removed (when is 0 there's no filter)
 * @param {number} [options.serieName='ms'] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
 * @return {Array<object>} - List of GSD objects with an extra 'ms' field with the integrated MS spectra
 */
export function massInPeaks(peakList, chromatogram, options = {}) {
  const { threhold = 0.3, serieName = 'ms' } = options;

  // integrate MS
  for (let i = 0; i < peakList.length; ++i) {
    let massSpectrum = merge(chromatogram, {
      threhold,
      serieName,
      range: { from: peakList[i].left.index, to: peakList[i].right.index },
    });
    peakList[i].ms = massSpectrum;
  }

  return peakList;
}
