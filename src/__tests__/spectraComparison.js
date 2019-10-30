import { lorentzian } from '../../testFiles/examples';

import { Chromatogram, spectraComparison } from '..';

test('Simple case', () => {
  const size = 70;
  const peakX = 10;
  let times = new Array(size);
  let tic1 = new Array(size);
  let tic2 = new Array(size);
  let ms1 = new Array(size);
  let ms2 = new Array(size);
  for (let i = 0; i < size; ++i) {
    times[i] = i;
    tic1[i] =
      lorentzian(i, peakX) +
      2 * lorentzian(i, 2 * peakX) +
      3 * lorentzian(i, 3 * peakX) +
      lorentzian(i, 4 * peakX) +
      2 * lorentzian(i, 5 * peakX);
    tic2[i] =
      lorentzian(i, 2 * peakX) +
      2 * lorentzian(i, 3 * peakX) +
      lorentzian(i, 4 * peakX) +
      2 * lorentzian(i, 5 * peakX) +
      lorentzian(i, 6 * peakX);
    ms1[i] = [[i + 10, 2 * (i + 10), 3 * (i + 10)], [1, 1, 1]];
    ms2[i] = [[i, 2 * i, 3 * i], [1, 1, 1]];
  }

  const options = {
    heightFilter: 0,
  };

  let chrom1 = new Chromatogram(times);
  chrom1.addSerie('tic', tic1);
  chrom1.addSerie('ms', ms1);

  let chrom2 = new Chromatogram(times);
  chrom2.addSerie('tic', tic2);
  chrom2.addSerie('ms', ms2);

  let compared = spectraComparison(chrom1, chrom2, options);
  expect(compared.peaksSimilarity).toStrictEqual([1, 1, 1, 1, 1]);
  expect(compared.peaksFirst.map((val) => val.x)).toStrictEqual([
    10,
    20,
    30,
    40,
    50,
  ]);
  expect(compared.peaksSecond.map((val) => val.x)).toStrictEqual([
    20,
    30,
    40,
    50,
    60,
  ]);
});

test('Shifted peaks', () => {
  const size = 70;
  const peakX = 10;
  let times = new Array(size);
  let tic1 = new Array(size);
  let tic2 = new Array(size);
  let ms1 = new Array(size);
  let ms2 = new Array(size);
  for (let i = 0; i < size; ++i) {
    times[i] = i;
    tic1[i] =
      lorentzian(i, peakX) +
      2 * lorentzian(i, 2 * peakX) +
      3 * lorentzian(i, 3 * peakX) +
      lorentzian(i, 4 * peakX) +
      2 * lorentzian(i, 5 * peakX);
    tic2[i] =
      lorentzian(i, 2 * peakX) +
      2 * lorentzian(i, 3 * peakX) +
      lorentzian(i, 4 * peakX) +
      2 * lorentzian(i, 5 * peakX) +
      lorentzian(i, 6 * peakX);
    ms1[i] = [[i, 2 * i, 3 * i], [1, 1, 1]];
    ms2[i] = [[i, 2 * i, 3 * i], [1, 1, 1]];
  }

  const options = {
    heightFilter: 0,
  };

  let chrom1 = new Chromatogram(times);
  chrom1.addSerie('tic', tic1);
  chrom1.addSerie('ms', ms1);

  let chrom2 = new Chromatogram(times);
  chrom2.addSerie('tic', tic2);
  chrom2.addSerie('ms', ms2);

  let compared = spectraComparison(chrom1, chrom2, options);
  expect(compared.peaksSimilarity).toStrictEqual([1, 1, 1, 1]);
  expect(compared.peaksFirst.map((val) => val.x)).toStrictEqual([
    20,
    30,
    40,
    50,
  ]);
  expect(compared.peaksSecond.map((val) => val.x)).toStrictEqual([
    20,
    30,
    40,
    50,
  ]);
});

test('Remove similar peaks in the similarity matrix column', () => {
  const size = 70;
  const peakX = 10;
  let times = new Array(size);
  let tic1 = new Array(size);
  let tic2 = new Array(size);
  let ms1 = new Array(size);
  let ms2 = new Array(size);
  for (let i = 0; i < size; ++i) {
    times[i] = i;
    tic1[i] =
      lorentzian(i, peakX) +
      2 * lorentzian(i, 2 * peakX) +
      3 * lorentzian(i, 3 * peakX) +
      lorentzian(i, 4 * peakX) +
      2 * lorentzian(i, 5 * peakX);
    tic2[i] =
      lorentzian(i, 2 * peakX) +
      2 * lorentzian(i, 3 * peakX) +
      lorentzian(i, 4 * peakX) +
      2 * lorentzian(i, 5 * peakX) +
      lorentzian(i, 6 * peakX);

    ms1[i] = [[i + 10, 2 * (i + 10), 3 * (i + 10)], [1, 1, 1]];
    // eslint-disable-next-line jest/no-if
    if (i < 45) {
      ms2[i] = [
        [28, 29, 30, 31, 32, 56, 58, 60, 62, 64, 84, 87, 90, 93, 96],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      ];
    } else {
      ms2[i] = [[i, 2 * i, 3 * i], [1, 1, 1]];
    }
  }

  const options = {
    heightFilter: 0,
  };

  let chrom1 = new Chromatogram(times);
  chrom1.addSerie('tic', tic1);
  chrom1.addSerie('ms', ms1);

  let chrom2 = new Chromatogram(times);
  chrom2.addSerie('tic', tic2);
  chrom2.addSerie('ms', ms2);

  let compared = spectraComparison(chrom1, chrom2, options);
  expect(compared.peaksSimilarity).toStrictEqual([1, 1]);
  expect(compared.peaksFirst.map((val) => val.x)).toStrictEqual([40, 50]);
  expect(compared.peaksSecond.map((val) => val.x)).toStrictEqual([50, 60]);
});
