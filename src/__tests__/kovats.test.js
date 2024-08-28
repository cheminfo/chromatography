import { test, expect } from 'vitest';

import { kovats } from '..';

test('Simple case', () => {
  expect(
    kovats({
      x: [43, 57, 71, 85],
      y: [100, 100, 100, 100],
    }).index,
  ).toBeUndefined();

  expect(
    kovats({
      x: [43, 57, 71, 85, 114],
      y: [100, 100, 100, 100, 0],
    }).index,
  ).toBeUndefined();

  expect(
    kovats({
      x: [29, 43, 57, 71, 85, 114],
      y: [100, 100, 100, 100, 100, 100],
    }).index,
  ).toBe(800);
});
