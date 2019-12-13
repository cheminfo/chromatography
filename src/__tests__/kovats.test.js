import { kovats } from '..';

test('Simple case', () => {
  expect(
    kovats({
      x: [43, 57, 71, 85],
    }),
  ).toBe(0);

  expect(
    kovats({
      x: [43, 57, 71, 85, 114],
    }),
  ).toBe(0);

  expect(
    kovats({
      x: [29, 43, 57, 71, 85, 114],
    }),
  ).toBe(800);
});
