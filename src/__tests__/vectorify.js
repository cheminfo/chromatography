import { readFileSync } from 'fs';
import { join } from 'path';

import { Chromatogram, massInPeaks, getPeaks, vectorify, fromJcamp } from '..';

import { lorentzian } from '../../testFiles/examples';

test('from a Diesel chromatogram', () => {
  const path = join(__dirname, '../../testFiles/jcamp/P064.JDX');
  const jcamp = readFileSync(path, 'utf8');
  const chrom = fromJcamp(jcamp);
  expect(chrom).toHaveLength(6992);

  let peakList = getPeaks(chrom);
  expect(peakList).toHaveLength(312);

  let sampleMS = chrom.getSerie('ms').data;
  expect(sampleMS.length).not.toBe(0);
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
    ms[i] = [[1, 2, 3], [1, 1, 1]];
  }
  let chrom = new Chromatogram(times);
  chrom.addSerie('tic', tic);
  chrom.addSerie('ms', ms);

  let peakList = getPeaks(chrom);
  expect(peakList).toHaveLength(1);

  let sampleMS = chrom.getSerie('ms').data;
  expect(sampleMS.length).not.toBe(0);
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
        y: [1, 1, 1]
      }
    }
  ];

  expect(vectorify(peaks, { massPower: 1 })).toEqual([
    {
      x: [1, 2, 3],
      y: [1, 2, 3]
    }
  ]);

  expect(vectorify(peaks)).toEqual([
    {
      x: [1, 2, 3],
      y: [1, 8, 27]
    }
  ]);
});
