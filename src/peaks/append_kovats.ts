import type { KovatsResult } from '../kovats.ts';
import { kovats } from '../kovats.ts';

import type { AppendMassResultValue } from './append_mass.ts';

export interface AppendKovatsResultValue {
  kovats: KovatsResult | null;
}

export type AppendKovatsResult<
  PeakType extends AppendMassResultValue = AppendMassResultValue,
> = PeakType & AppendKovatsResultValue;

export function appendKovats<
  PeakType extends AppendMassResultValue = AppendMassResultValue,
>(peaks: PeakType[]): Array<AppendKovatsResult<PeakType>> {
  const result = [];
  for (const peak of peaks) {
    result.push({ ...peak, kovats: kovats(peak.ms) });
  }
  return result;
}
