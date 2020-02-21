import { merge } from './ms/merge';

/**
 * Append MS spectra to a peak list
 * @param {Chromatogram} chromatogram
 * @param {Array<object>} ranges - Array of range {from:, to:}
 * @param {object} [options={}] - Options for the integral filtering
 * @param {number} [options.mergeThreshold=0.3] - Peaks that are under this value (in Da) will be merged
 * @param {number} [options.serieName='ms'] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
 * @return {Array<object>} - A copy of ranges with ms appended
 */
export function calculateMassForPeaks(chromatogram, ranges, options = {}) {
  const { mergeThreshold = 0.3, serieName = 'ms' } = options;
  ranges = JSON.parse(JSON.stringify(ranges));
  // integrate MS
  for (let range of ranges) {
    let massSpectrum = merge(chromatogram, range, {
      mergeThreshold,
      serieName,
    });
    range.ms = massSpectrum;
  }

  return ranges;
}
