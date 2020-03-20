import { tenPeaksKovats as chromatogram } from '../../../testFiles/examples';
import { getPeaks } from '../getPeaks';
import { appendMass } from '../appendMass';
import { appendKovats } from '../..';

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
