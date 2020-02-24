import { Chromatogram } from '../..';

test('calculate length with empty mass', () => {
  let example = new Chromatogram([1, 2], {
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
  expect(example.getSeries('length').data).toStrictEqual([0, 3]);
});
