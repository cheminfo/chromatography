import { readFileSync } from 'fs';
import { join } from 'path';

import { lorentzian } from '../../testFiles/examples';

import { Chromatogram, massInPeaks, getPeaks, fromJcamp } from '..';

test('from a Diesel chromatogram', () => {
  const path = join(__dirname, '../../testFiles/jcamp/P064.JDX');
  const jcamp = readFileSync(path, 'utf8');
  const chromatogram = fromJcamp(jcamp);
  expect(chromatogram).toHaveLength(6992);

  let peakList = getPeaks(chromatogram);
  expect(peakList).toHaveLength(312);

  let sampleMS = chromatogram.getSerie('ms').data;
  expect(sampleMS).not.toHaveLength(0);
  let integratedList = massInPeaks(peakList, sampleMS);
  expect(peakList).toHaveLength(integratedList.length);
});

test('triplet', () => {
  const size = 30;
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
      [1.6, 2.1, 3],
      [1, 1, 1],
    ];
  }
  let chrom = new Chromatogram(times);
  chrom.addSerie('tic', tic);
  chrom.addSerie('ms', ms);

  let peaks = getPeaks(chrom);
  expect(peaks).toHaveLength(1);

  let sampleMS = chrom.getSerie('ms').data;
  expect(sampleMS).not.toHaveLength(0);
  let integratedList = massInPeaks(peaks, sampleMS);
  expect(peaks).toHaveLength(integratedList.length);
});

test('simple case', () => {
  let peaks = [
    {
      left: { index: 0 },
      right: { index: 2 },
    },
  ];

  expect(
    massInPeaks(peaks, [
      [
        [1, 2],
        [1, 1],
      ],
      [
        [1, 2, 5],
        [1, 1, 1],
      ],
      [
        [3, 4],
        [1, 1],
      ],
    ]),
  ).toStrictEqual([
    {
      left: { index: 0 },
      right: { index: 2 },
      ms: {
        x: [1, 2, 3, 4, 5],
        y: [2, 2, 1, 1, 1],
      },
    },
  ]);
});

test('thresholdFactor', () => {
  let peaks = [
    {
      left: { index: 0 },
      right: { index: 2 },
    },
  ];
  let mass = [
    [
      [1, 2],
      [1, 1],
    ],
    [
      [1, 2, 5],
      [1, 1, 1],
    ],
    [
      [2, 4],
      [1, 1],
    ],
  ];

  expect(massInPeaks(peaks, mass, { thresholdFactor: 0.5 })).toStrictEqual([
    {
      left: { index: 0 },
      right: { index: 2 },
      ms: {
        x: [1, 2],
        y: [2, 3],
      },
    },
  ]);
});

test('maxNumberPeaks', () => {
  let peaks = [
    {
      left: { index: 0 },
      right: { index: 2 },
    },
  ];
  let mass = [
    [
      [1, 2],
      [1, 1],
    ],
    [
      [1, 2, 5],
      [1, 1, 1],
    ],
    [
      [2, 4],
      [1, 2],
    ],
  ];

  expect(massInPeaks(peaks, mass, { maxNumberPeaks: 3 })).toStrictEqual([
    {
      left: { index: 0 },
      right: { index: 2 },
      ms: {
        x: [1, 2, 4],
        y: [2, 3, 2],
      },
    },
  ]);
});
