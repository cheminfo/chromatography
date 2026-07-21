import { expect, test } from 'vitest';

import { Chromatogram } from '../../index.ts';

test('calculate length with empty mass', () => {
  const example = new Chromatogram([1, 2], {
    ms: [
      [[], []],
      [
        [101, 201, 301],
        [11, 21, 31],
      ],
    ],
  });
  example.calculateLength('ms');
  expect(example.getSeriesNames()).toContain('length');
  expect(example.getSeries('length').getData()).toStrictEqual([0, 3]);
});
