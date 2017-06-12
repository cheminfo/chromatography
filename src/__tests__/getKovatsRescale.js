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
    expect(kovatsRescale.kovatsIndexes.length).toEqual(1);
    expect(kovatsRescale.kovatsIndexes[0].time).toEqual(15);
    expect(kovatsRescale.kovatsIndexes[0].value).toEqual(0);
    expect(kovatsRescale.peaks.length).toEqual(1);
});
