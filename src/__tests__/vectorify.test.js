import { readFileSync } from 'fs';
import { join } from 'path';

import { lorentzian } from '../../testFiles/examples';

import { Chromatogram, massInPeaks, getPeaks, vectorify, fromJcamp } from '..';

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

  let vector = vectorify(integratedList);
  expect(vector).toHaveLength(peakList.length);
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
      [1, 2, 3],
      [1, 1, 1],
    ];
  }
  let chromatogram = new Chromatogram(times);
  chromatogram.addSerie('tic', tic);
  chromatogram.addSerie('ms', ms);

  let peakList = getPeaks(chromatogram);
  expect(peakList).toHaveLength(1);

  let sampleMS = chromatogram.getSerie('ms').data;
  expect(sampleMS).not.toHaveLength(0);
  let integratedList = massInPeaks(peakList, sampleMS);
  expect(peakList).toHaveLength(integratedList.length);

  let vector = vectorify(integratedList);
  expect(vector).toHaveLength(peakList.length);
});

test('simple case', () => {
  let peaks = [
    {
      ms: {
        x: [1, 2, 3],
        y: [1, 1, 1],
      },
    },
  ];

  expect(vectorify(peaks, { massPower: 1 })).toStrictEqual([
    {
      x: [1, 2, 3],
      y: [1, 2, 3],
    },
  ]);

  expect(vectorify(peaks)).toStrictEqual([
    {
      x: [1, 2, 3],
      y: [1, 8, 27],
    },
  ]);
});
