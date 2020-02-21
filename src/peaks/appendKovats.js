import { kovats } from '../kovats';

/**
 * Append kovats to
 * @param {array<object>} peaks - Reference spectra
 */
export function appendKovats(peaks) {
  // Peak picking
  for (let peak of peaks) {
    peak.kovats = kovats(peak.ms);
  }
  return peaks;
}
