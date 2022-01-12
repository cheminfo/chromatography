import { getKovatsConversionFunction } from '..';

const conversionTable = [
  { x: 10, kovats: { index: 800 } },
  { x: 20, kovats: { index: 900 } },
  { x: 30, kovats: { index: 1000 } },
];

test('from time to kovats', () => {
  const time2kovats = getKovatsConversionFunction(conversionTable);
  expect(time2kovats(10)).toBe(800);
  expect(time2kovats(15)).toBe(850);
  expect(time2kovats(20)).toBe(900);
  expect(time2kovats(25)).toBe(950);
  expect(time2kovats(30)).toBe(1000);
});

test('from kovats to time', () => {
  const kovats2time = getKovatsConversionFunction(conversionTable, {
    revert: true,
  });
  expect(kovats2time(800)).toBe(10);
  expect(kovats2time(850)).toBe(15);
  expect(kovats2time(900)).toBe(20);
  expect(kovats2time(950)).toBe(25);
  expect(kovats2time(1000)).toBe(30);
});
