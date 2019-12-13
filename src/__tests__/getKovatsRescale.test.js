import { getSimulatedSpectrum } from '../../testFiles/examples';

import { getKovatsRescale } from '..';

test('triplet', () => {
  let chrom = getSimulatedSpectrum();

  const options = {
    heightFilter: 2,
    thresholdFactor: 0,
    maxNumberPeaks: 1000,
    groupWidth: 0,
  };

  let kovatsRescale = getKovatsRescale(chrom, options);
  expect(kovatsRescale.kovatsIndexes).toStrictEqual([{ time: 15, value: 0 }]);
  expect(kovatsRescale.peaks).toHaveLength(1);
});

test('inplace', () => {
  let chrom = getSimulatedSpectrum();

  const options = {
    heightFilter: 2,
    thresholdFactor: 0,
    maxNumberPeaks: 1000,
    groupWidth: 0,
  };

  let kovatsRescale = chrom.getKovatsRescale(options);
  expect(kovatsRescale.kovatsIndexes).toStrictEqual([{ time: 15, value: 0 }]);
  expect(kovatsRescale.peaks).toHaveLength(1);
});
