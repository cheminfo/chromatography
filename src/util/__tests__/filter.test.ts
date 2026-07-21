import { describe, expect, it } from 'vitest';

import { simple4 } from '../../../testFiles/examples.ts';

describe('filter', () => {
  it('Keep the odd', () => {
    const chromatogram = simple4.copy();
    chromatogram.filter((index) => index % 2 !== 0);
    expect(chromatogram.getTimes()).toHaveLength(2);
    expect(chromatogram.getSeries('ms').getData()).toHaveLength(2);
    expect(chromatogram.getTimes()).toStrictEqual([2, 4]);
    expect(chromatogram.getSeries('ms').getData()).toStrictEqual([
      [
        [102, 202, 302],
        [12, 22, 32],
      ],
      [
        [104, 204, 304],
        [14, 24, 34],
      ],
    ]);
  });

  it('Keep time under a value', () => {
    const chromatogram = simple4.copy();
    chromatogram.filter((index, time) => time < 3);
    expect(chromatogram.getTimes()).toHaveLength(2);
    expect(chromatogram.getSeries('ms').getData()).toHaveLength(2);
    expect(chromatogram.getTimes()).toStrictEqual([1, 2]);
    expect(chromatogram.getSeries('ms').getData()).toStrictEqual([
      [
        [101, 201, 301],
        [11, 21, 31],
      ],
      [
        [102, 202, 302],
        [12, 22, 32],
      ],
    ]);
  });

  it('Copied object', () => {
    const chromatogram = simple4.copy();
    expect(chromatogram.getTimes()).toHaveLength(4);
    const copy = chromatogram.filter((index) => index % 2 !== 0, {
      copy: true,
    });
    expect(chromatogram.getTimes()).toHaveLength(4);
    expect(copy.getTimes()).toHaveLength(2);
  });
});
