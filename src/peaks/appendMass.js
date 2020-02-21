import { merge } from '../ms/merge';

/**
 * Append MS spectra to a list of peaks
 * @param {Chromatogram} chromatogram
 * @param {Array<object>} peaks - Array of range {from:, to:}
 * @param {object} [options={}] - Options for the integral filtering
 * @param {number} [options.mergeThreshold=0.3] - Peaks that are under this value (in Da) will be merged
 * @param {number} [options.serieName='ms'] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
 * @return {Array<object>} - A copy of ranges with ms appended
 */
export function appendMass(chromatogram, peaks, options = {}) {
  const { mergeThreshold = 0.3, serieName = 'ms' } = options;
  // integrate MS
  for (let peak of peaks) {
    let massSpectrum = merge(chromatogram, peak, {
      mergeThreshold,
      serieName,
    });
    peak.ms = massSpectrum;
  }
  return peaks;
}
