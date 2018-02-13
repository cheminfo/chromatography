import { Chromatogram } from '../../index';
import { meanFilter } from '../../filter/meanFilter';

test('simple case', () => {
  let chromatogram = new Chromatogram(
    [1, 2], {
      ms: [
        [[100, 200, 300], [10, 20, 300]],
        [[600], [274]]
      ]
    }
  );

  let ms = meanFilter(chromatogram, 'ms');
  expect(ms.data).toEqual([
    [[300], [300]],
    [[], []]
  ]);
});

describe('inplace', () => {
  it('default behavior', () => {
    let chromatogram = new Chromatogram(
      [1, 2], {
        ms: [
          [[100, 200, 300], [10, 20, 300]],
          [[600], [274]]
        ]
      }
    );
    chromatogram.meanFilter('ms');
    expect(chromatogram.series.msMedian.data).toEqual([
      [[300], [300]],
      [[], []]
    ]);
    expect(chromatogram.series.ms.data).toEqual([
      [[100, 200, 300], [10, 20, 300]],
      [[600], [274]]
    ]);
  });

  it('input name', () => {
    let chromatogram = new Chromatogram(
      [1, 2], {
        ms: [
          [[100, 200, 300], [10, 20, 300]],
          [[600], [274]]
        ]
      }
    );
    chromatogram.meanFilter('ms', { serieName: 'filtered' });
    expect(chromatogram.series.filtered.data).toEqual([
      [[300], [300]],
      [[], []]
    ]);
    expect(chromatogram.series.ms.data).toEqual([
      [[100, 200, 300], [10, 20, 300]],
      [[600], [274]]
    ]);
  });
});

