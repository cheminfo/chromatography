import { readFileSync } from 'fs';
import { join } from 'path';

import { toBeDeepCloseTo } from 'jest-matcher-deep-close-to';

import { lorentzian, simple4 } from '../../testFiles/examples';

import { Chromatogram, massInPeaks, getPeaks, fromJcamp } from '..';

expect.extend({ toBeDeepCloseTo });

describe('massInPeaks', () => {
  it('from a Diesel chromatogram', () => {
    const path = join(__dirname, '../../testFiles/jcamp/P064.JDX');
    const jcamp = readFileSync(path, 'utf8');
    const chromatogram = fromJcamp(jcamp);
    expect(chromatogram).toHaveLength(6992);

    let peakList = getPeaks(chromatogram);
    expect(peakList).toHaveLength(312);

    let sampleMS = chromatogram.getSerie('ms').data;
    expect(sampleMS).not.toHaveLength(0);
    let integratedList = massInPeaks(chromatogram, peakList, sampleMS);
    expect(peakList).toHaveLength(integratedList.length);
  });

  it('triplet', () => {
    const size = 30;
    const fourth = size / 4;
    let times = new Array(size);
    let tic = new Array(size);
    let ms = new Array(size);
    for (let i = 0; i < size; ++i) {
      times[i] = i;
      tic[i] =
        lorentzian(i, fourth) +
        2 * lorentzian(i, 2 * fourth) +
        lorentzian(i, 3 * fourth);
      ms[i] = [
        [1.6, 2.1, 3],
        [1, 1, 1],
      ];
    }
    let chromatogram = new Chromatogram(times);
    chromatogram.addSerie('tic', tic);
    chromatogram.addSerie('ms', ms);

    let peaks = getPeaks(chromatogram);
    expect(peaks).toHaveLength(1);

    let sampleMS = chromatogram.getSerie('ms').data;
    expect(sampleMS).not.toHaveLength(0);
    let integratedList = massInPeaks(chromatogram, peaks, sampleMS);
    expect(peaks).toHaveLength(integratedList.length);
  });

  it('simple case', () => {
    let peaks = [
      {
        left: { index: 0 },
        right: { index: 2 },
      },
    ];

    let result = massInPeaks(simple4, peaks);

    expect(result).toStrictEqual([
      {
        left: { index: 0 },
        right: { index: 2 },
        ms: {
          fromIndex: 0,
          toIndex: 1,
          x: [101, 102, 201, 202, 301, 302],
          y: [11, 12, 21, 22, 31, 32],
        },
      },
    ]);
  });

  it('simple case with mergeThreshold', () => {
    let peaks = [
      {
        left: { index: 0 },
        right: { index: 2 },
      },
    ];

    let result = massInPeaks(simple4, peaks, { mergeThreshold: 2 })[0];

    expect(result.ms.x).toBeDeepCloseTo([101.5, 201.5, 301.5], 1);
    expect(result.ms.y).toStrictEqual([23, 43, 63]);
  });
});
