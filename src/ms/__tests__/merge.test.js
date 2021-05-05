import { toBeDeepCloseTo } from 'jest-matcher-deep-close-to';

import {
  highResolution4,
  highResolution,
  simple,
} from '../../../testFiles/examples';

expect.extend({ toBeDeepCloseTo });

describe('merge: Low resolution', () => {
  it('no options', () => {
    let result = simple.merge();

    result.x = Array.from(result.x);
    result.y = Array.from(result.y);

    expect(result).toStrictEqual({
      x: [100, 101, 200, 201, 300, 301],
      y: [10, 11, 20, 21, 30, 31],
      from: { index: 0, time: 1 },
      to: { index: 1, time: 2 },
    });
  });

  it('time range', () => {
    let result = simple.merge({ range: { from: 1, to: 1 } });
    result.x = Array.from(result.x);
    result.y = Array.from(result.y);

    expect(result).toStrictEqual({
      x: [100, 200, 300],
      y: [10, 20, 30],
      from: { index: 0, time: 1 },
      to: { index: 0, time: 1 },
    });
  });

  it('time range to high', () => {
    let result = simple.merge({ range: { from: 2, to: 100 } });
    result.x = Array.from(result.x);
    result.y = Array.from(result.y);

    expect(result).toStrictEqual({
      x: [101, 201, 301],
      y: [11, 21, 31],
      from: { index: 1, time: 2 },
      to: { index: 1, time: 2 },
    });
  });

  it('outside time range', () => {
    let result = simple.merge({ range: { from: 10, to: 11 } });
    expect(result).toStrictEqual({
      x: [],
      y: [],
    });
  });
});

describe('merge: High resolution', () => {
  it('no options', () => {
    let result = highResolution.merge();
    expect(result).toBeDeepCloseTo({
      x: [100.00147619047618, 200.0148780487805, 300.00014918032787],
      y: [21, 41, 61],
      from: { index: 0, time: 1 },
      to: { index: 1, time: 2 },
    });
  });

  it('no options and 4 spectra', () => {
    let result = highResolution4.merge();
    expect(result).toBeDeepCloseTo({
      x: [100.05858333333335, 200.00119999999998, 300],
      y: [60, 25, 32],
      from: { index: 0, time: 1 },
      to: { index: 3, time: 4 },
    });
  });

  it('small threhold', () => {
    let result = highResolution.merge({ mergeThreshold: 0.00001 });
    result.x = Array.from(result.x);
    result.y = Array.from(result.y);
    expect(result).toBeDeepCloseTo({
      x: [100.001, 100.002, 200.01, 200.02, 300.0001, 300.0002],
      y: [11, 10, 21, 20, 31, 30],
      from: { index: 0, time: 1 },
      to: { index: 1, time: 2 },
    });
  });

  it('wrong seriesName', () => {
    expect(() => highResolution.merge({ seriesName: 'abc' })).toThrow(
      'The series "abc"',
    );
  });
});
