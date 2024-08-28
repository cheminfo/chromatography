import { test, expect } from 'vitest';

import { cosineSimilarity } from '../cosineSimilarity';

test('simple case', () => {
  expect(cosineSimilarity([1, 2, 3], [1, 1, 1], [1, 2, 3], [1, 1, 1])).toBe(1);
  expect(
    cosineSimilarity([1, 2, 3], [1, 1, 1], [1, 2, 4], [1, 1, 1]),
  ).toStrictEqual(4 / 9);
  expect(cosineSimilarity([1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3])).toBe(1);
  expect(
    cosineSimilarity([1, 2, 3, 4], [1, 1, 1, 1], [1, 2, 4, 5], [1, 1, 1, 1]),
  ).toStrictEqual(9 / 16);
  expect(
    cosineSimilarity([1, 2, 3, 4], [1, 1, 1, 1], [4, 5], [1, 1]),
  ).toStrictEqual(1 / 8);
  expect(cosineSimilarity([], [], [], [])).toBe(0);
});
