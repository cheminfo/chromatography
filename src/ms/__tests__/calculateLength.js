import { Chromatogram } from '../..';

test('calculate length with empty mass', () => {
  var example = new Chromatogram(
    [1, 2], {
      ms: [
        [[], []],
        [[101, 201, 301], [11, 21, 31]],
      ]
    }
  );
  example.calculateLength('ms');
  expect(example.getSerieNames()).toContain('length');
  expect(example.getSerie('length').data).toStrictEqual([0, 3]);
});

