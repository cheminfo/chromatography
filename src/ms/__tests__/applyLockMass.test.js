import { toBeDeepCloseTo } from 'jest-matcher-deep-close-to';

import { Chromatogram } from '../..';

expect.extend({ toBeDeepCloseTo });

test('simple case', () => {
  let chromatogram = new Chromatogram([1, 2], {
    ms: [
      [
        [100, 200, 300],
        [10, 20, 30],
      ],
      [[622.024747], [274]],
    ],
  });

  let newLength = chromatogram.getTimes().length / 2;
  chromatogram.applyLockMass('C12H19F12N3O6P3'); // em: 622.02951

  expect(chromatogram.getTimes()).toHaveLength(newLength);
  expect(chromatogram).toHaveLength(newLength);
  expect(chromatogram.getSeries('ms').data).toHaveLength(newLength);

  expect(chromatogram.getTimes()).toStrictEqual([1]);
  expect(chromatogram.getSeries('ms').data[0][1]).toStrictEqual([10, 20, 30]);

  const expectedMass = [100.005, 200.005, 300.005];
  expect(chromatogram.getSeries('ms').data[0][0]).toBeDeepCloseTo(
    expectedMass,
    3,
  );
});

test('array of mf', () => {
  let chromatogram = new Chromatogram([1, 2], {
    ms: [
      [
        [100, 200, 300],
        [10, 20, 30],
      ],
      [[622.024747], [274]],
    ],
  });

  let newLength = chromatogram.getTimes().length / 2;
  chromatogram.applyLockMass(['C12H19F12N3O6P3', 'CCl3H', 'C10H20O3']); // em: 622.02951

  expect(chromatogram.getTimes()).toHaveLength(newLength);
  expect(chromatogram).toHaveLength(newLength);
  expect(chromatogram.getSeries('ms').data).toHaveLength(newLength);

  expect(chromatogram.getTimes()).toStrictEqual([1]);
  expect(chromatogram.getSeries('ms').data[0][1]).toStrictEqual([10, 20, 30]);

  const expectedMass = [100.005, 200.005, 300.005];
  expect(chromatogram.getSeries('ms').data[0][0]).toBeDeepCloseTo(
    expectedMass,
    3,
  );
});

test('different references', () => {
  let chromatogram = new Chromatogram([1, 2, 3, 4, 5, 6], {
    ms: [
      [
        [10, 622.024747, 100, 200],
        [10, 274, 40, 50],
      ],
      [
        [100, 200, 300],
        [10, 20, 30],
      ],
      [[188.13624], [272]],
      [
        [100, 200, 300],
        [10, 20, 30],
      ],
      [[10], [10]],
      [
        [100, 200, 300],
        [10, 20, 30],
      ],
    ],
  });

  let newLength = chromatogram.getTimes().length / 2;
  const { referenceUsed } = chromatogram.applyLockMass(
    ['C12H19F12N3O6P3', 'C10H20O3', 'C100'],
    {
      oddReference: false,
    },
  ); // em: 622.02951

  expect(referenceUsed).toStrictEqual({
    C100: 0,
    C12H19F12N3O6P3: 1,
    C10H20O3: 1,
    total: 3,
    percent: 66.66666666666666,
    totalFound: 2,
  });

  expect(chromatogram.getTimes()).toHaveLength(newLength);
  expect(chromatogram).toHaveLength(newLength);
  expect(chromatogram.getSeries('ms').data).toHaveLength(newLength);

  expect(chromatogram.getTimes()).toStrictEqual([2, 4, 6]);
  expect(chromatogram.getSeries('ms').data[0][1]).toStrictEqual([10, 20, 30]);
  expect(chromatogram.getSeries('ms').data[1][1]).toStrictEqual([10, 20, 30]);

  const expectedMass = [100.005, 200.005, 300.005];
  expect(chromatogram.getSeries('ms').data[0][0]).toBeDeepCloseTo(
    expectedMass,
    3,
  );
  expect(chromatogram.getSeries('ms').data[1][0]).toBeDeepCloseTo(
    expectedMass,
    3,
  );
});

test('check exceptions', () => {
  let chromatogram = new Chromatogram([1]);
  expect(() => chromatogram.applyLockMass('C12H19F12N3O6P3')).toThrow(
    'The "ms" series must be defined',
  );
});
