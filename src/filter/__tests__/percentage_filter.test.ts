import { describe, expect, it, test } from 'vitest';

import { Chromatogram } from '../../index.ts';
import { percentageFilter } from '../percentage_filter.ts';

test('simple case', () => {
  const chromatogram = new Chromatogram([1, 2], {
    ms: [
      [
        [100, 200, 300],
        [10, 40, 300],
      ],
      [[600], [274]],
    ],
  });

  const ms = percentageFilter(chromatogram, 'ms');
  expect(ms.getData()).toStrictEqual([
    [
      [200, 300],
      [40, 300],
    ],
    [[600], [274]],
  ]);
});

describe('inplace', () => {
  it('default behavior', () => {
    const chromatogram = new Chromatogram([1, 2], {
      ms: [
        [
          [100, 200, 300],
          [10, 40, 300],
        ],
        [[600], [274]],
      ],
    });
    chromatogram.percentageFilter('ms');
    expect(chromatogram.series.msPercentage.getData()).toStrictEqual([
      [
        [200, 300],
        [40, 300],
      ],
      [[600], [274]],
    ]);
    expect(chromatogram.series.ms.getData()).toStrictEqual([
      [
        [100, 200, 300],
        [10, 40, 300],
      ],
      [[600], [274]],
    ]);
  });

  it('input name', () => {
    const chromatogram = new Chromatogram([1, 2], {
      ms: [
        [
          [100, 200, 300],
          [10, 40, 300],
        ],
        [[600], [274]],
      ],
    });
    chromatogram.percentageFilter('ms', { seriesName: 'filtered' });
    expect(chromatogram.series.filtered.getData()).toStrictEqual([
      [
        [200, 300],
        [40, 300],
      ],
      [[600], [274]],
    ]);
    expect(chromatogram.series.ms.getData()).toStrictEqual([
      [
        [100, 200, 300],
        [10, 40, 300],
      ],
      [[600], [274]],
    ]);
  });
});
