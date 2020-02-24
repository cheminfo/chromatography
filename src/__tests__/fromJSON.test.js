import { simpleStringified } from '../../testFiles/examples';

import { fromJSON } from '..';

test('Parse a JSON', () => {
  let newChromatogram = fromJSON(JSON.parse(simpleStringified));
  expect(newChromatogram.getSeries('ms').data).toHaveLength(2);
  expect(newChromatogram.times).toHaveLength(2);
  expect(newChromatogram.getSeriesNames()).toStrictEqual(['ms']);
});

test('Series as an array', () => {
  let series = [
    {
      name: 'ms',
      data: [
        [1, 1],
        [2, 2],
      ],
    },
    { name: 'tic', data: [2, 4] },
  ];
  let newChromatogram = fromJSON({ times: [0, 1], series });
  expect(newChromatogram.getSeries('ms').data).toHaveLength(2);
  expect(newChromatogram.times).toHaveLength(2);
  expect(newChromatogram.getSeriesNames()).toStrictEqual(['ms', 'tic']);
});
