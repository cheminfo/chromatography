import { simpleTic, simple } from '../../testFiles/examples';

import { Chromatogram } from '..';

describe('General methods', () => {
  it('Constructor errors', () => {
    expect(() => {
      new Chromatogram({ a: 1 }); // eslint-disable-line
    }).toThrow('Times must be an array');
    expect(() => {
      new Chromatogram(12); // eslint-disable-line
    }).toThrow('Times must be an array');
    expect(() => {
      new Chromatogram(); // eslint-disable-line
    }).toThrow('The time serie is mandatory');
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

  it('addSerie errors', () => {
    let chromatogram = new Chromatogram([1, 2], { tic: [1, 2] });
    expect(() => chromatogram.addSerie('abc', 1234)).toThrow(
      'The array size is not the same as the time size',
    );
    expect(() => chromatogram.addSerie('abc', { a: 1, b: 2 })).toThrow(
      'The array size is not the same as the time size',
    );
    expect(() => chromatogram.addSerie('tic', [2, 3, 4])).toThrow(
      'A serie with name "tic" already exists',
    );

    expect(() => chromatogram.addSeries(1)).toThrow(
      'data must be an object containing arrays of series',
    );
  });

  it('deleteSerie', () => {
    let chromatogram = new Chromatogram([1, 2], { tic: [1, 2] });
    expect(chromatogram.hasSerie('tic')).toStrictEqual(true);
    expect(() => chromatogram.deleteSerie('ms')).toThrow(
      'The serie "ms" does not exist',
    );
    chromatogram.deleteSerie('tic');
    expect(chromatogram.hasSerie('tic')).toStrictEqual(false);
  });

  it('Copy chromatogram', () => {
    let chromatogram = new Chromatogram([1, 2], { tic: [1, 2] });
    expect(chromatogram.hasSerie('tic')).toStrictEqual(true);
    let copy = chromatogram.copy();
    expect(copy.hasSerie('tic')).toStrictEqual(true);
    copy.deleteSerie('tic');
    expect(copy.hasSerie('tic')).toStrictEqual(false);
    expect(chromatogram.hasSerie('tic')).toStrictEqual(true);
  });

  it('Require serie', () => {
    let chromatogram = new Chromatogram([1, 2], { tic: [1, 2] });
    expect(() => chromatogram.requiresSerie('ms')).toThrow(
      'The serie "ms" does not exist',
    );
    expect(() => chromatogram.requiresSerie('tic')).not.toThrow(
      'The serie "tic" does not exist',
    );
  });
});

describe('Integrations', () => {
  it('Integrate a tic', () => {
    let result = simpleTic.integrate('tic', [[1.5, 5.5]]);
    expect(result).toStrictEqual([
      {
        integral: 125,
        from: {
          baseline: 0,
          index: 0,
          time: 1.5,
        },
        to: {
          baseline: 0,
          index: 4,
          time: 5.5,
        },
      },
    ]);
  });

  it('Integrate a ms', () => {
    let result = simple.merge('ms', [[1, 2]]);
    expect(result).toStrictEqual([
      {
        serie: [
          [100, 101, 200, 201, 300, 301],
          [10, 11, 20, 21, 30, 31],
        ],
        from: {
          time: 1,
          index: 0,
        },
        to: {
          time: 2,
          index: 1,
        },
      },
    ]);
  });
});
