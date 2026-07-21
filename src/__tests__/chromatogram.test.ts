import { describe, expect, it } from 'vitest';

import { simple, simpleTic } from '../../testFiles/examples.ts';
import { Chromatogram } from '../index.ts';

describe('General methods', () => {
  it('Constructor errors', () => {
    // @ts-expect-error Testing input validation.
    expect(() => new Chromatogram({ a: 1 })).toThrow('input must be an array');
    // @ts-expect-error Testing input validation.
    expect(() => new Chromatogram(12)).toThrow('input must be an array');
    // @ts-expect-error Testing input validation.
    expect(() => new Chromatogram()).toThrow('input must be an array');
  });

  it('get first and last time', () => {
    const chromatogram = new Chromatogram([1, 2, 3]);
    expect(chromatogram.firstTime).toBe(1);
    expect(chromatogram.lastTime).toBe(3);
  });

  it('get first and last time of typed array', () => {
    const array = new Float64Array(3);
    array[0] = 1;
    array[1] = 2;
    array[2] = 3;
    const chromatogram = new Chromatogram(array);
    expect(chromatogram.firstTime).toBe(1);
    expect(chromatogram.lastTime).toBe(3);
  });

  it('addSeries errors', () => {
    const chromatogram = new Chromatogram([1, 2], { tic: [1, 2] });
    expect(() => chromatogram.addSeries('abc', [1])).toThrow(
      'The series size is not the same as the times size',
    );
    expect(() => chromatogram.addSeries('tic', [2, 3])).toThrow(
      'A series with name "tic" already exists',
    );
  });

  it('deleteSeries', () => {
    const chromatogram = new Chromatogram([1, 2], { tic: [1, 2] });
    expect(chromatogram.hasSeries('tic')).toBe(true);
    expect(() => chromatogram.deleteSeries('ms')).toThrow(
      'The series "ms" does not exist',
    );
    chromatogram.deleteSeries('tic');
    expect(chromatogram.hasSeries('tic')).toBe(false);
  });

  it('Copy chromatogram', () => {
    const chromatogram = new Chromatogram(Float64Array.from([1, 2]), {
      tic: Float64Array.from([1, 2]),
    });
    expect(chromatogram.hasSeries('tic')).toBe(true);
    const copy = chromatogram.copy();
    expect(copy.hasSeries('tic')).toBe(true);
    copy.deleteSeries('tic');
    expect(copy.hasSeries('tic')).toBe(false);
    expect(chromatogram.hasSeries('tic')).toBe(true);
  });

  it('Require series', () => {
    const chromatogram = new Chromatogram([1, 2], { tic: [1, 2] });
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
    const result = simpleTic.integrate([{ from: 1.4, to: 5.5 }]);
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
    const result = simple.merge({ range: { from: 1, to: 2 } });
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
