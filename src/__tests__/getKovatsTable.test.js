import { lorentzian } from '../../testFiles/examples';

import { Chromatogram, getKovatsTable } from '..';

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
      [29, 43, 57, 71, 85, 114],
      [1, 1, 1, 1, 1, 1],
    ];
  }
  let chromatogram = new Chromatogram(times);
  chromatogram.addSerie('tic', tic);
  chromatogram.addSerie('ms', ms);

  const options = {
    heightFilter: 2,
    thresholdFactor: 0,
    maxNumberPeaks: 1000,
    groupWidth: 0,
  };

  let table = getKovatsTable(chromatogram, options);
  expect(table.kovatsIndexes).toStrictEqual([{ time: 15, value: 800 }]);
});

test('default', () => {
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
      [29, 43, 57, 71, 85, 114],
      [1, 1, 1, 1, 1, 1],
    ];
  }
  let chromatogram = new Chromatogram(times);
  chromatogram.addSerie('tic', tic);
  chromatogram.addSerie('ms', ms);

  let table = getKovatsTable(chromatogram);
  expect(table).toStrictEqual({ kovatsIndexes: [], peaks: [] });
});