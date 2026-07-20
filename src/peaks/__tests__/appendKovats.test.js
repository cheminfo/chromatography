import { describe, expect, it } from 'vitest';

import { tenPeaksKovats as chromatogram } from '../../../testFiles/examples.js';
import { appendKovats } from '../../index.js';
import { appendMass } from '../appendMass.js';
import { getPeaks } from '../getPeaks.js';

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
