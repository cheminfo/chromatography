import { merge } from './ms/merge';

/**
 * Append MS spectra to a peak list
 * @param {Array<object>} peakList - List of GSD objects
 * @param {Chromatogram} chromatogram
 * @param {object} [options={}] - Options for the integral filtering
 * @param {number} [options.mergeThreshold=0.3] - Peaks that are under this value (in Da) will be merged
 * @param {number} [options.serieName='ms'] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
 * @return {Array<object>} - List of GSD objects with an extra 'ms' field with the integrated MS spectra
 */
export function massInPeaks(chromatogram, peakList, options = {}) {
  const { mergeThreshold = 0.3, serieName = 'ms' } = options;

  // integrate MS
  for (let peak of peakList) {
    let massSpectrum = merge(chromatogram, {
      mergeThreshold,
      serieName,
      range: { from: peak.left.index, to: peak.right.index },
    });
    peak.ms = massSpectrum;
  }

  return peakList;
}
