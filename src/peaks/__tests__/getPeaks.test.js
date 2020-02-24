import fs from 'fs';
import { join } from 'path';

import { Chromatogram, fromJcamp } from '../..';
import { getSimulatedSpectrum, fivePeaks } from '../../../testFiles/examples';

describe('getPeaks', () => {
  it('from a Diesel chromatogram', () => {
    const path = join(__dirname, '../../../testFiles/jcamp/P064.JDX');
    const jcamp = fs.readFileSync(path, 'utf8');

    const chromatogram = fromJcamp(jcamp);
    expect(chromatogram).toHaveLength(6992);

    let peakList = chromatogram.getPeaks();
    expect(peakList).toHaveLength(47);
  });

  it('triplet', () => {
    let chromatogram = getSimulatedSpectrum({ size: 60 });
    let peaks = chromatogram.getPeaks();
    expect(peaks).toHaveLength(3);
  });

  it('throws when not send a tic series', () => {
    const size = 30;
    let times = new Array(size);
    for (let i = 0; i < size; ++i) {
      times[i] = i;
    }
    let chromatogram = new Chromatogram(times);

    expect(() => chromatogram.getPeaks()).toThrow(
      'The series "tic" does not exist',
    );
  });

  it('fivePeaks', () => {
    let peaks = fivePeaks.getPeaks();
    let sumOfDiffFromTo = peaks.reduce(
      (previous, current) => (previous += current.to - current.from),
      0,
    );
    expect(sumOfDiffFromTo).toBeCloseTo(22, 5);
  });
});
