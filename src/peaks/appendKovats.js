import { kovats } from '../kovats';

export function appendKovats(peaks) {
  const result = [];
  for (let peak of peaks) {
    result.push({ ...peak, kovats: kovats(peak.ms) });
  }
  return result;
}
