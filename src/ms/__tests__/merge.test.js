import { toBeDeepCloseTo } from 'jest-matcher-deep-close-to';

import { merge } from '../..';
import { highResolution, simple } from '../../../testFiles/examples';

expect.extend({ toBeDeepCloseTo });

describe('Low resolution', () => {
  it('no options', () => {
    let result = merge(simple);

    expect(result[0]).toStrictEqual({
      x: [100, 101, 200, 201, 300, 301],
      y: [10, 11, 20, 21, 30, 31],
      fromIndex: 0,
      toIndex: 1,
    });
  });

  it('time range', () => {
    let result = merge(simple, [{ from: 1, to: 1 }]);
    expect(result[0]).toStrictEqual({
      x: [100, 200, 300],
      y: [10, 20, 30],
      fromIndex: 0,
      toIndex: 0,
    });
  });

  it('time range to high', () => {
    let result = merge(simple, [{ from: 2, to: 100 }])[0];
    expect(result).toStrictEqual({
      x: [101, 201, 301],
      y: [11, 21, 31],
      fromIndex: 1,
      toIndex: 1,
    });
  });

  it('outside time range', () => {
    let result = merge(simple, [{ from: 10, to: 11 }])[0];
    expect(result).toStrictEqual({
      x: [],
      y: [],
    });
  });
});

describe('High resolution', () => {
  it('no options', () => {
    let result = merge(highResolution, [{}])[0];
    expect(result.x).toBeDeepCloseTo([100.0014, 200.0148, 300.0001], 4);
    expect(result.y).toBeDeepCloseTo([21, 41, 61]);
    expect(result.fromIndex).toBe(0);
    expect(result.toIndex).toBe(1);
  });

  it('small threhold', () => {
    let result = merge(highResolution, [{}], { mergeThreshold: 0.00001 })[0];
    expect(result).toStrictEqual({
      x: [100.001, 100.002, 200.01, 200.02, 300.0001, 300.0002],
      y: [11, 10, 21, 20, 31, 30],
      fromIndex: 0,
      toIndex: 1,
    });
  });

  it('wrong serieName', () => {
    expect(() => merge(highResolution, [{}], { serieName: 'abc' })).toThrow(
      'The serie "abc"',
    );
  });
});
