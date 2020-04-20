import { Chromatogram } from '..';
import { simpleTic, simple } from '../../testFiles/examples';

describe('General methods', () => {
  it('Constructor errors', () => {
    expect(() => new Chromatogram({ a: 1 })).toThrow('times must be an array');
    expect(() => new Chromatogram(12)).toThrow('times must be an array');
    expect(() => new Chromatogram()).toThrow('times must be an array');
  });

  it('get first and last time', () => {
    let chromatogram = new Chromatogram([1, 2, 3]);
    expect(chromatogram.firstTime).toStrictEqual(1);
    expect(chromatogram.lastTime).toStrictEqual(3);
  });

  it('get first and last time of typed array', () => {
    let array = new Uint16Array(3);
    array[0] = 1;
    array[1] = 2;
    array[2] = 3;
    let chromatogram = new Chromatogram(array);
    expect(chromatogram.firstTime).toStrictEqual(1);
    expect(chromatogram.lastTime).toStrictEqual(3);
  });

  it('addSeries errors', () => {
    let chromatogram = new Chromatogram([1, 2], { tic: [1, 2] });
    expect(() => chromatogram.addSeries('abc', 1234)).toThrow(
      'The series size is not the same as the times size',
    );
    expect(() => chromatogram.addSeries('abc', { a: 1, b: 2 })).toThrow(
      'The series size is not the same as the times size',
    );
    expect(() => chromatogram.addSeries('tic', [2, 3, 4])).toThrow(
      'A series with name "tic" already exists',
    );
  });

  it('deleteSeries', () => {
    let chromatogram = new Chromatogram([1, 2], { tic: [1, 2] });
    expect(chromatogram.hasSeries('tic')).toStrictEqual(true);
    expect(() => chromatogram.deleteSeries('ms')).toThrow(
      'The series "ms" does not exist',
    );
    chromatogram.deleteSeries('tic');
    expect(chromatogram.hasSeries('tic')).toStrictEqual(false);
  });

  it('Copy chromatogram', () => {
    let chromatogram = new Chromatogram([1, 2], { tic: [1, 2] });
    expect(chromatogram.hasSeries('tic')).toStrictEqual(true);
    let copy = chromatogram.copy();
    expect(copy.hasSeries('tic')).toStrictEqual(true);
    copy.deleteSeries('tic');
    expect(copy.hasSeries('tic')).toStrictEqual(false);
    expect(chromatogram.hasSeries('tic')).toStrictEqual(true);
  });

  it('Require series', () => {
    let chromatogram = new Chromatogram([1, 2], { tic: [1, 2] });
    expect(() => chromatogram.requiresSeries('ms')).toThrow(
      'The series "ms" does not exist',
    );
    expect(() => chromatogram.requiresSeries('tic')).not.toThrow(
      'The series "tic" does not exist',
    );
  });
});

describe('Integrations', () => {
  it('Integrate a tic', () => {
    let result = simpleTic.integrate([{ from: 1.4, to: 5.5 }]);
    expect(result).toStrictEqual([
      {
        integration: 120,
        from: {
          baseline: 0,
          index: 0,
          time: 1,
        },
        to: {
          baseline: 0,
          index: 4,
          time: 5,
        },
      },
    ]);
  });

  it('Merge a ms', () => {
    let result = simple.merge({ range: { from: 1, to: 2 } });
    expect(result).toStrictEqual({
      x: [100, 101, 200, 201, 300, 301],
      y: [10, 11, 20, 21, 30, 31],

      from: {
        time: 1,
        index: 0,
      },
      to: {
        time: 2,
        index: 1,
      },
    });
  });
});
