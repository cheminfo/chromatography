import { expect, test } from 'vitest';

import { massFilter, vectorify } from '../index.ts';

test('thresholdFactor', () => {
  const mass = {
    x: [1, 2, 4, 5],
    y: [2, 3, 2, 1],
  };

  expect(massFilter(mass, { thresholdFactor: 0.5 })).toStrictEqual({
    x: [1, 2, 4],
    y: [2, 3, 2],
  });
});

test('maxNumberPeaks', () => {
  const mass = {
    x: [1, 2, 3, 4, 5],
    y: [2, 3, 2, 1, 3],
  };

  expect(massFilter(mass, { maxNumberPeaks: 2 })).toStrictEqual({
    x: [2, 5],
    y: [3, 3],
  });
});

test('groupWidth', () => {
  const mass = {
    x: [1, 2, 3, 5, 6],
    y: [4, 5, 4, 3, 1],
  };

  expect(massFilter(mass, { groupWidth: 2 })).toStrictEqual({
    x: [2, 5],
    y: [5, 3],
  });
});

test('from vectorify', () => {
  const peaks = [
    {
      ms: {
        x: [1, 2, 3],
        y: [1, 1, 1],
        from: {
          index: -1,
          time: 0,
        },
        to: {
          index: -1,
          time: 0,
        },
      },
    },
  ];
  const vector = vectorify(peaks, {
    thresholdFactor: 0.5,
    massPower: 1,
  });

  expect(vector).toStrictEqual([
    {
      x: [2, 3],
      y: [2, 3],
    },
  ]);
});
