import { describe, expect, it, test } from 'vitest';

import { simpleTic } from '../../../testFiles/examples.ts';
import { Chromatogram } from '../../index.ts';

const chromatogram = new Chromatogram([1, 2, 3, 4], { tic: [2, 4, 6, 8] });

test('Integrate a tic', () => {
  const result = simpleTic.integrate([{ from: 1.8, to: 5.5 }], {
    seriesName: 'tic',
  });
  expect(result).toStrictEqual([
    {
      integration: 105,
      from: {
        time: 2,
        index: 1,
        baseline: 0,
      },
      to: {
        time: 5,
        index: 4,
        baseline: 0,
      },
    },
  ]);
});

test('Errors', () => {
  // @ts-expect-error Testing input validation.
  expect(() => simpleTic.integrate(123)).toThrow(
    'Ranges must be an array of type [{from,to}]',
  );

  const ms = new Chromatogram([1], {
    ms: [
      [
        [300.001, 300.01, 300.019],
        [10, 20, 30],
      ],
    ],
  });
  expect(() =>
    ms.integrate([{ from: 1, to: 2 }], {
      seriesName: 'ms',
    }),
  ).toThrow('series "ms" is not a 1D series');
});

describe('integrate: baseline correction', () => {
  it('without baseline', () => {
    const result = simpleTic.integrate([{ from: 1, to: 3 }], {
      baseline: undefined,
    });
    expect(result).toStrictEqual([
      {
        integration: 40,
        from: {
          time: 1,
          index: 0,
          baseline: 0,
        },
        to: {
          time: 3,
          index: 2,
          baseline: 0,
        },
      },
    ]);
  });

  it('trapezoid baseline', () => {
    const result = chromatogram.integrate([{ from: 1, to: 3 }], {
      baseline: 'trapezoid',
    });
    expect(result).toStrictEqual([
      {
        integration: 0,
        from: {
          time: 1,
          index: 0,
          baseline: 2,
        },
        to: {
          time: 3,
          index: 2,
          baseline: 6,
        },
      },
    ]);
  });

  it('min baseline', () => {
    let result = chromatogram.integrate([{ from: 1, to: 3 }], {
      baseline: 'min',
    });
    expect(result).toStrictEqual([
      {
        integration: 4,
        from: {
          time: 1,
          index: 0,
          baseline: 2,
        },
        to: {
          time: 3,
          index: 2,
          baseline: 2,
        },
      },
    ]);

    const other = new Chromatogram([1, 2, 3], { tic: [6, 4, 2] });
    result = other.integrate([{ from: 1, to: 3 }], { baseline: 'min' });
    expect(result).toStrictEqual([
      {
        integration: 4,
        from: {
          time: 1,
          index: 0,
          baseline: 2,
        },
        to: {
          time: 3,
          index: 2,
          baseline: 2,
        },
      },
    ]);
  });

  it('error', () => {
    expect(() =>
      // @ts-expect-error Testing input validation.
      chromatogram.integrate([{ from: 1, to: 3 }], { baseline: 'bla' }),
    ).toThrow('Unknown baseline method "bla"');
  });
});
