import { expect, test } from 'vitest';

import { simpleStringified } from '../../testFiles/examples.ts';
import { fromJSON } from '../index.ts';

test('Parse a JSON', () => {
  const newChromatogram = fromJSON(JSON.parse(simpleStringified));
  expect(newChromatogram.getSeries('ms').getData()).toHaveLength(2);
  expect(newChromatogram.times).toHaveLength(2);
  expect(newChromatogram.getSeriesNames()).toStrictEqual(['ms']);
});

test('Series as an array', () => {
  const series = [
    {
      name: 'ms',
      data: [
        [
          [1, 1],
          [2, 2],
        ],
        [
          [1, 1],
          [2, 2],
        ],
      ],
    },
    { name: 'tic', data: [2, 4] },
  ];
  const newChromatogram = fromJSON({ times: [0, 1], series });
  expect(newChromatogram.getSeries('ms').getData()).toHaveLength(2);
  expect(newChromatogram.times).toHaveLength(2);
  expect(newChromatogram.getSeriesNames()).toStrictEqual(['ms', 'tic']);
});
