import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { toBeDeepCloseTo } from 'jest-matcher-deep-close-to';
import { describe, it, expect } from 'vitest';

import { Chromatogram, appendMass, fromJcamp } from '../..';
import { lorentzian, simple4 } from '../../../testFiles/examples';

expect.extend({ toBeDeepCloseTo });

describe('appendMass', () => {
  it('from a Diesel chromatogram', () => {
    const path = join(__dirname, '../../../testFiles/jcamp/P064.JDX');
    const jcamp = readFileSync(path, 'utf8');
    const chromatogram = fromJcamp(jcamp);
    expect(chromatogram).toHaveLength(6992);

    let peaks = chromatogram.getPeaks();
    expect(peaks).toHaveLength(244);

    let sampleMS = chromatogram.getSeries('ms').data;
    expect(sampleMS).not.toHaveLength(0);
    let peaksWithMS = appendMass(chromatogram, peaks, sampleMS);
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
    chromatogram.addSeries('tic', tic);
    chromatogram.addSeries('ms', ms);

    let peaks = chromatogram.getPeaks();
    expect(peaks).toHaveLength(3);

    let sampleMS = chromatogram.getSeries('ms').data;
    expect(sampleMS).not.toHaveLength(0);
    let integratedList = appendMass(chromatogram, peaks, sampleMS);
    expect(peaks).toHaveLength(integratedList.length);
  });

  it('simple case', () => {
    let peaks = [
      {
        fromIndex: 0,
        toIndex: 2,
      },
    ];

    let result = appendMass(simple4, peaks);
    result[0].ms.x = Array.from(result[0].ms.x);
    result[0].ms.y = Array.from(result[0].ms.y);
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
    let result = appendMass(simple4, peaks, {
      mergeThreshold: 2,
    })[0];
    expect(Array.from(result.ms.x)).toBeDeepCloseTo(
      [102.05, 202.03, 302.02],
      1,
    );
    expect(Array.from(result.ms.y)).toStrictEqual([36, 66, 96]);
  });
});
