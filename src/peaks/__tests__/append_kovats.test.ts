import { describe, expect, it } from 'vitest';

import { tenPeaksKovats as chromatogram } from '../../../testFiles/examples.ts';
import { appendKovats } from '../../index.ts';
import { appendMass } from '../append_mass.ts';
import { getPeaks } from '../get_peaks.ts';

describe('appendKovats', () => {
  it('ten peaks', () => {
    const peaks = getPeaks(chromatogram);

    const appendedPeaks = appendMass(chromatogram, peaks);

    const appendedKovatsPeaks = appendKovats(appendedPeaks);
    for (const peak of appendedKovatsPeaks) {
      expect(peak.retentionTime).toStrictEqual(peak.kovats?.index);
    }
  });
});
