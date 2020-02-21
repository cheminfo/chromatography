import { readFileSync } from 'fs';
import { join } from 'path';

import { toBeDeepCloseTo } from 'jest-matcher-deep-close-to';

import { lorentzian, simple4 } from '../../testFiles/examples';

import { Chromatogram, calculateMassForPeaks, getPeaks, fromJcamp } from '..';

expect.extend({ toBeDeepCloseTo });

describe('calculateMassForPeaks', () => {
  it('from a Diesel chromatogram', () => {
    const path = join(__dirname, '../../testFiles/jcamp/P064.JDX');
    const jcamp = readFileSync(path, 'utf8');
    const chromatogram = fromJcamp(jcamp);
    expect(chromatogram).toHaveLength(6992);

    let peaks = getPeaks(chromatogram);
    expect(peaks).toHaveLength(47);

    let sampleMS = chromatogram.getSerie('ms').data;
    expect(sampleMS).not.toHaveLength(0);
    let peaksWithMS = calculateMassForPeaks(chromatogram, peaks, sampleMS);
    expect(peaks).toHaveLength(peaksWithMS.length);
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
    expect(peaks).toHaveLength(3);

    let sampleMS = chromatogram.getSerie('ms').data;
    expect(sampleMS).not.toHaveLength(0);
    let integratedList = calculateMassForPeaks(chromatogram, peaks, sampleMS);
    expect(peaks).toHaveLength(integratedList.length);
  });

  it('simple case', () => {
    let peaks = [
      {
        fromIndex: 0,
        toIndex: 2,
      },
    ];

    let result = calculateMassForPeaks(simple4, peaks);
    expect(result).toStrictEqual([
      {
        fromIndex: 0,
        toIndex: 2,
        ms: {
          x: [101, 102, 103, 201, 202, 203, 301, 302, 303],
          y: [11, 12, 13, 21, 22, 23, 31, 32, 33],
          from: { index: 0, time: 1 },
          to: { index: 2, time: 3 },
        },
      },
    ]);
  });

  it('simple case with mergeThreshold', () => {
    let peaks = [
      {
        fromIndex: 0,
        toIndex: 2,
      },
    ];
    let result = calculateMassForPeaks(simple4, peaks, {
      mergeThreshold: 2,
    })[0];
    expect(result.ms.x).toBeDeepCloseTo([102, 202, 302], 1);
    expect(result.ms.y).toStrictEqual([36, 66, 96]);
  });
});
