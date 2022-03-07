import fs from 'fs';
import { join } from 'path';

import { toBeDeepCloseTo } from 'jest-matcher-deep-close-to';

import { Chromatogram, fromJcamp } from '../..';
import { getSimulatedSpectrum, fivePeaks } from '../../../testFiles/examples';

expect.extend({ toBeDeepCloseTo });

describe('getPeaks', () => {
  it('from a Diesel chromatogram', () => {
    const path = join(__dirname, '../../../testFiles/jcamp/P064.JDX');
    const jcamp = fs.readFileSync(path, 'utf8');

    const chromatogram = fromJcamp(jcamp);
    expect(chromatogram).toHaveLength(6992);

    let peakList = chromatogram.getPeaks();

    expect(peakList).toHaveLength(146);

    expect(peakList[0]).toBeDeepCloseTo({
      from: 24.906,
      to: 25.452,
      width: 0.546,
      retentionTime: 25.179,
      intensity: 100674.08571428571,
    });
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
    let fwhm = 1;
    // https://en.wikipedia.org/wiki/Gaussian_function
    let deltaInflexionPoints = fwhm / Math.sqrt(2 * Math.log(2));

    let sumOfDiffFromTo = peaks.reduce(
      (previous, current) => (previous += current.to - current.from),
      0,
    );
    expect(sumOfDiffFromTo).toBeCloseTo(deltaInflexionPoints * 5, 2);
  });
});
