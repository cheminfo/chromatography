import { describe, it, expect } from 'vitest';

import { Chromatogram } from '../..';
import { simple } from '../../../testFiles/examples';

describe('calculateBps', () => {
  it('simple case', () => {
    simple.calculateBpc();
    expect(simple.getSeriesNames()).toContain('bpc');
    expect(simple.getSeries('bpc').data).toStrictEqual([30, 31]);
  });

  it('empty mass', () => {
    let example = new Chromatogram([1, 2], {
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
    expect(example.getSeries('bpc').data).toStrictEqual([0, 31]);
  });

  it('Errors', () => {
    expect(() => {
      const chromatogram = new Chromatogram([1, 2, 3, 5, 6]);
      chromatogram.calculateBpc();
    }).toThrow('The series "ms" does not exist');
  });
});
