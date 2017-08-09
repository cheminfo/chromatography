import {getKovatsRescale} from '..';
import {getSimulatedSpectrum} from './data/examples';

test('triplet', () => {
    let chrom = getSimulatedSpectrum();

    const options = {
        heightFilter: 2,
        thresholdFactor: 0,
        maxNumberPeaks: 1000,
        groupWidth: 0
    };

    let kovatsRescale = getKovatsRescale(chrom, options);
    expect(kovatsRescale.kovatsIndexes).toEqual([{time: 15, value: 0}]);
    expect(kovatsRescale.peaks.length).toEqual(1);
});

test('inplace', () => {
    let chrom = getSimulatedSpectrum();

    const options = {
        heightFilter: 2,
        thresholdFactor: 0,
        maxNumberPeaks: 1000,
        groupWidth: 0
    };

    let kovatsRescale = chrom.getKovatsRescale(options);
    expect(kovatsRescale.kovatsIndexes).toEqual([{time: 15, value: 0}]);
    expect(kovatsRescale.peaks.length).toEqual(1);
});
