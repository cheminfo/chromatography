import { integrate, Chromatogram } from '../..';
import { simpleTic } from '../../../testFiles/examples';

let chromatogram = new Chromatogram([1, 2, 3, 4], { tic: [2, 4, 6, 8] });

test('Integrate a tic', () => {
  let result = integrate(simpleTic, [{ from: 1.8, to: 5.5 }], {
    serieName: 'tic',
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
  expect(() => integrate(simpleTic, 123)).toThrow(
    'Ranges must be an array of type [{from:to}]',
  );

  let ms = new Chromatogram([1], {
    ms: [
      [
        [300.001, 300.01, 300.019],
        [10, 20, 30],
      ],
    ],
  });
  expect(() =>
    integrate(ms, [{ from: 1, to: 2 }], {
      serieName: 'ms',
    }),
  ).toThrow('The serie "ms" is not of dimension 1');
});

describe('integrate: baseline correction', () => {
  it('without baseline', () => {
    let result = integrate(simpleTic, [{ from: 1, to: 3 }], {
      baseline: false,
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
    let result = integrate(chromatogram, [{ from: 1, to: 3 }], {
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
    let result = integrate(chromatogram, [{ from: 1, to: 3 }], {
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

    let other = new Chromatogram([1, 2, 3], { tic: [6, 4, 2] });
    result = integrate(other, [{ from: 1, to: 3 }], { baseline: 'min' });
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
      integrate(chromatogram, [{ from: 1, to: 3 }], { baseline: 'bla' }),
    ).toThrow('Unknown baseline method "bla"');
  });
});
