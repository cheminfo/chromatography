import { Chromatogram } from '../src';

export * from './fivePeaks.example';
export * from './tenPeaksKovats.example';

export const simpleTic = new Chromatogram([1, 2, 3, 4, 5], {
  tic: [10, 20, 30, 40, 50],
});

export const simple = new Chromatogram([1, 2], {
  ms: [
    [
      [100, 200, 300],
      [10, 20, 30],
    ],
    [
      [101, 201, 301],
      [11, 21, 31],
    ],
  ],
});

export const highResolution = new Chromatogram([1, 2], {
  ms: [
    [
      [100.002, 200.02, 300.0002],
      [10, 20, 30],
    ],
    [
      [100.001, 200.01, 300.0001],
      [11, 21, 31],
    ],
  ],
});

export const highResolution4 = new Chromatogram([1, 2, 3, 4], {
  ms: [
    [
      [300.0002, 100.002, 200.02, 99.999],
      [30, 20, 10, 15],
    ],
    [
      [200.01, 100.001, 300.0001],
      [21, 11, 31],
    ],
    [
      [100.000, 200.00, 300.0000],
      [12, 22, 32],
    ],
    [
      [99.9, 299.9, 199.9],
      [12, 22, 32],
    ],
  ],
});


export const simpleStringified =
  '{"times":[1,2],"series":{"ms":{"data":[[[100,200,300],[10,20,30]],[[101,201,301],[11,21,31]]],"meta":{}}}}';

export const simple4 = new Chromatogram([1, 2, 3, 4], {
  ms: [
    [
      [101, 201, 301],
      [11, 21, 31],
    ],
    [
      [102, 202, 302],
      [12, 22, 32],
    ],
    [
      [103, 203, 303],
      [13, 23, 33],
    ],
    [
      [104, 204, 304],
      [14, 24, 34],
    ],
  ],
});

// https://en.wikipedia.org/wiki/Cauchy_distribution
export function lorentzian(x, x0 = 0, gamma = 1) {
  return (
    (gamma * gamma) / (Math.PI * gamma * (gamma * gamma + (x - x0) * (x - x0)))
  );
}

export function getSimulatedSpectrum(options = {}) {
  const { size = 30 } = options;
  const fourth = size / 4;
  let times = new Array(size);
  let tic = new Array(size);
  let ms = new Array(size);
  for (let i = 0; i < size; ++i) {
    times[i] = i;
    tic[i] =
      lorentzian(i, fourth) +
      2 * lorentzian(i, 2 * fourth) +
      lorentzian(i, 3 * fourth);
    ms[i] = [
      [1, 2, 3],
      [1, 1, 1],
    ];
  }
  return new Chromatogram(times, {
    tic: tic,
    ms: ms,
  });
}
