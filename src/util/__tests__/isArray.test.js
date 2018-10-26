import { isArray } from '../isArray';

test('isArray', () => {
  expect(isArray(1)).toBe(false);
  expect(isArray('ab')).toBe(false);
  expect(isArray({ a: 1 })).toBe(false);
  expect(isArray([1, 2, 3])).toBe(true);
  expect(isArray(new Uint16Array(2))).toBe(true);
});
