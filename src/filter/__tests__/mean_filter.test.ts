import { describe, expect, it } from 'vitest';

import { Chromatogram } from '../../index.ts';
import { meanFilter } from '../mean_filter.ts';

describe('meanFilter', () => {
  it('simple case', () => {
    const chromatogram = new Chromatogram([1, 2], {
      ms: [
        [
          [100, 200, 300],
          [10, 20, 300],
        ],
        [[600], [274]],
      ],
    });

    const ms = meanFilter(chromatogram, 'ms');
    expect(ms.getData()).toStrictEqual([
      [[300], [300]],
      [[], []],
    ]);
  });
  it('test with empty array', () => {
    const chromatogram = new Chromatogram([1, 2], {
      ms: [
        [
          [100, 200, 300],
          [10, 20, 300],
        ],
        [[], []],
      ],
    });

    const ms = meanFilter(chromatogram, 'ms');
    expect(ms.getData()).toStrictEqual([
      [[300], [300]],
      [[], []],
    ]);
  });
});

describe('meanFilter inplace', () => {
  it('default behavior', () => {
    const chromatogram = new Chromatogram([1, 2], {
      ms: [
        [
          [100, 200, 300],
          [10, 20, 300],
        ],
        [[600], [274]],
      ],
    });
    chromatogram.meanFilter('ms');
    expect(chromatogram.series.msMean.getData()).toStrictEqual([
      [[300], [300]],
      [[], []],
    ]);
    expect(chromatogram.series.ms.getData()).toStrictEqual([
      [
        [100, 200, 300],
        [10, 20, 300],
      ],
      [[600], [274]],
    ]);
  });

  it('input name', () => {
    const chromatogram = new Chromatogram([1, 2], {
      ms: [
        [
          [100, 200, 300],
          [10, 20, 300],
        ],
        [[600], [274]],
      ],
    });
    chromatogram.meanFilter('ms', { seriesName: 'filtered' });
    expect(chromatogram.series.filtered.getData()).toStrictEqual([
      [[300], [300]],
      [[], []],
    ]);
    expect(chromatogram.series.ms.getData()).toStrictEqual([
      [
        [100, 200, 300],
        [10, 20, 300],
      ],
      [[600], [274]],
    ]);
  });
});
