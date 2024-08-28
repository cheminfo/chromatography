import { merge } from '../ms/merge';

/**
 * Append MS spectra to a list of peaks
 * @param {Chromatogram} chromatogram
 * @param {Array<object>} peaks - Array of range {from:, to:}
 * @param {object} [options={}] - Options for the integral filtering
 * @param {number} [options.mergeThreshold=0.3] - Peaks that are closer than this value (in Da) will be merged
 * @param {number} [options.seriesName='ms'] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
 * @returns {Array<object>} - A copy of ranges with ms appended
 */
export function appendMass(chromatogram, peaks, options = {}) {
  const { mergeThreshold = 0.3, seriesName = 'ms' } = options;
  const result = [];
  // integrate MS
  for (const peak of peaks) {
    const massSpectrum = merge(chromatogram, {
      mergeThreshold,
      seriesName,
      range: peak,
    });
    result.push({
      ...peak,
      ms: massSpectrum,
    });
  }
  return result;
}
