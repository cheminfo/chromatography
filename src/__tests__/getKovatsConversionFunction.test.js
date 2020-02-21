import { getKovatsConversionFunction } from '..';

const conversionTable = [
  { x: 10, kovats: { index: 800 } },
  { x: 20, kovats: { index: 900 } },
  { x: 30, kovats: { index: 1000 } },
];

test('from time to kovats', () => {
  const time2kovats = getKovatsConversionFunction(conversionTable);
  expect(time2kovats(10)).toStrictEqual(800);
  expect(time2kovats(15)).toStrictEqual(850);
  expect(time2kovats(20)).toStrictEqual(900);
  expect(time2kovats(25)).toStrictEqual(950);
  expect(time2kovats(30)).toStrictEqual(1000);
});

test('from kovats to time', () => {
  const kovats2time = getKovatsConversionFunction(conversionTable, {
    revert: true,
  });
  expect(kovats2time(800)).toStrictEqual(10);
  expect(kovats2time(850)).toStrictEqual(15);
  expect(kovats2time(900)).toStrictEqual(20);
  expect(kovats2time(950)).toStrictEqual(25);
  expect(kovats2time(1000)).toStrictEqual(30);
});
