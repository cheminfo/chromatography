import { tenPeaksKovats as chromatogram } from '../../../testFiles/examples';

import { getPeaks } from '../getPeaks';
import { appendMass } from '../appendMass';
import { appendKovats } from '../..';

describe('appendKovats', () => {
  it('ten peaks', () => {
    const peaks = getPeaks(chromatogram);

    appendMass(chromatogram, peaks);

    appendKovats(peaks);
    for (let peak of peaks) {
      expect(peak.x).toEqual(peak.kovats.index);
    }
  });
});
