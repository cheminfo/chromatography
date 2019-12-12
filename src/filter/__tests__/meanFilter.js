import { Chromatogram } from '../../index';
import { meanFilter } from '../meanFilter';

describe('meanFilter', () => {
  it('simple case', () => {
    let chromatogram = new Chromatogram([1, 2], {
      ms: [
        [
          [100, 200, 300],
          [10, 20, 300],
        ],
        [[600], [274]],
      ],
    });

    let ms = meanFilter(chromatogram, 'ms');
    expect(ms.data).toStrictEqual([
      [[300], [300]],
      [[], []],
    ]);
  });
  it('test with empty array', () => {
    let chromatogram = new Chromatogram([1, 2], {
      ms: [
        [
          [100, 200, 300],
          [10, 20, 300],
        ],
        [[], []],
      ],
    });

    let ms = meanFilter(chromatogram, 'ms');
    expect(ms.data).toStrictEqual([
      [[300], [300]],
      [[], []],
    ]);
  });
});

describe('meanFilter inplace', () => {
  it('default behavior', () => {
    let chromatogram = new Chromatogram([1, 2], {
      ms: [
        [
          [100, 200, 300],
          [10, 20, 300],
        ],
        [[600], [274]],
      ],
    });
    chromatogram.meanFilter('ms');
    expect(chromatogram.series.msMedian.data).toStrictEqual([
      [[300], [300]],
      [[], []],
    ]);
    expect(chromatogram.series.ms.data).toStrictEqual([
      [
        [100, 200, 300],
        [10, 20, 300],
      ],
      [[600], [274]],
    ]);
  });

  it('input name', () => {
    let chromatogram = new Chromatogram([1, 2], {
      ms: [
        [
          [100, 200, 300],
          [10, 20, 300],
        ],
        [[600], [274]],
      ],
    });
    chromatogram.meanFilter('ms', { serieName: 'filtered' });
    expect(chromatogram.series.filtered.data).toStrictEqual([
      [[300], [300]],
      [[], []],
    ]);
    expect(chromatogram.series.ms.data).toStrictEqual([
      [
        [100, 200, 300],
        [10, 20, 300],
      ],
      [[600], [274]],
    ]);
  });
});
