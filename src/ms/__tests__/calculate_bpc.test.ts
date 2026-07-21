import { describe, expect, it } from 'vitest';

import { simple } from '../../../testFiles/examples.ts';
import { Chromatogram } from '../../index.ts';

describe('calculateBps', () => {
  it('simple case', () => {
    simple.calculateBpc();
    expect(simple.getSeriesNames()).toContain('bpc');
    expect(simple.getSeries('bpc').getData()).toStrictEqual([30, 31]);
  });

  it('empty mass', () => {
    const example = new Chromatogram([1, 2], {
      ms: [
        [[], []],
        [
          [101, 201, 301],
          [11, 21, 31],
        ],
      ],
    });
    example.calculateBpc();
    expect(example.getSeriesNames()).toContain('bpc');
    expect(example.getSeries('bpc').getData()).toStrictEqual([0, 31]);
  });

  it('Errors', () => {
    expect(() => {
      const chromatogram = new Chromatogram([1, 2, 3, 5, 6]);
      chromatogram.calculateBpc();
    }).toThrow('The series "ms" does not exist');
  });
});
