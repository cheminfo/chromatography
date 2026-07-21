import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

import { lorentzian, simple4 } from '../../../testFiles/examples.ts';
import { Chromatogram, appendMass, fromJcamp } from '../../index.ts';

describe('appendMass', () => {
  it('from a Diesel chromatogram', () => {
    const path = join(import.meta.dirname, '../../../testFiles/jcamp/P064.JDX');
    const jcamp = readFileSync(path, 'utf8');
    const chromatogram = fromJcamp(jcamp);
    expect(chromatogram).toHaveLength(6992);

    const peaks = chromatogram.getPeaks();
    expect(peaks).toHaveLength(249);

    const peaksWithMS = appendMass(chromatogram, peaks);
    expect(peaks).toHaveLength(peaksWithMS.length);
  });

  it('triplet', () => {
    const size = 30;
    const fourth = size / 4;
    const times = new Array(size);
    const tic = new Array(size);
    const ms = new Array(size);
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
    const chromatogram = new Chromatogram(times);
    chromatogram.addSeries('tic', tic);
    chromatogram.addSeries('ms', ms);

    const peaks = chromatogram.getPeaks();
    expect(peaks).toHaveLength(3);

    const integratedList = appendMass(chromatogram, peaks);
    expect(peaks).toHaveLength(integratedList.length);
  });

  it('simple case', () => {
    const peaks = [
      {
        from: 0,
        to: 3,
      },
    ];

    const result = appendMass(simple4, peaks);
    expect(result).toStrictEqual([
      {
        from: 0,
        to: 3,
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
    const peaks = [
      {
        from: 0,
        to: 3,
      },
    ];
    const result = appendMass(simple4, peaks, {
      mergeThreshold: 2,
    })[0];
    expect(result.ms.x).toBeDeepCloseTo([102.05, 202.03, 302.02], 1);
    expect(result.ms.y).toStrictEqual([36, 66, 96]);
  });
});
