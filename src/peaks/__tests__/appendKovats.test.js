import { describe, it, expect } from 'vitest';

import { appendKovats } from '../..';
import { tenPeaksKovats as chromatogram } from '../../../testFiles/examples';
import { appendMass } from '../appendMass';
import { getPeaks } from '../getPeaks';

describe('appendKovats', () => {
  it('ten peaks', () => {
    let peaks = getPeaks(chromatogram);

    peaks = appendMass(chromatogram, peaks);

    peaks = appendKovats(peaks);
    for (let peak of peaks) {
      expect(peak.retentionTime).toStrictEqual(peak.kovats.index);
    }
  });
});
