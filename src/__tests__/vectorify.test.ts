import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

import { lorentzian } from '../../testFiles/examples.ts';
import { Chromatogram, appendMass, fromJcamp, vectorify } from '../index.ts';

describe('vectorify', () => {
  it('from a Diesel chromatogram', () => {
    const path = join(import.meta.dirname, '../../testFiles/jcamp/P064.JDX');
    const jcamp = readFileSync(path, 'utf8');
    const chromatogram = fromJcamp(jcamp);
    expect(chromatogram).toHaveLength(6992);

    const peakList = chromatogram.getPeaks();

    const integratedList = appendMass(chromatogram, peakList);
    expect(peakList).toHaveLength(integratedList.length);

    const vector = vectorify(integratedList);
    expect(vector).toHaveLength(peakList.length);
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
        [1, 2, 3],
        [1, 1, 1],
      ];
    }
    const chromatogram = new Chromatogram(times);
    chromatogram.addSeries('tic', tic);
    chromatogram.addSeries('ms', ms);

    const peakList = chromatogram.getPeaks();
    expect(peakList).toHaveLength(3);

    const sampleMS = chromatogram.getSeries('ms').getData();
    expect(sampleMS).not.toHaveLength(0);
    const integratedList = appendMass(chromatogram, peakList);
    expect(peakList).toHaveLength(integratedList.length);

    const vector = vectorify(integratedList);
    expect(vector).toHaveLength(peakList.length);
  });

  it('simple case', () => {
    const peaks = [
      {
        ms: {
          x: [1, 2, 3],
          y: [1, 1, 1],
          from: {
            index: -1,
            time: 0,
          },
          to: {
            index: -1,
            time: 0,
          },
        },
      },
    ];

    expect(vectorify(peaks, { massPower: 1 })).toStrictEqual([
      {
        x: [1, 2, 3],
        y: [1, 2, 3],
      },
    ]);

    expect(vectorify(peaks)).toStrictEqual([
      {
        x: [1, 2, 3],
        y: [1, 8, 27],
      },
    ]);
  });
});
