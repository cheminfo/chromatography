import test from 'ava';
import {Chromatogram, spectraComparison} from '..';

// https://en.wikipedia.org/wiki/Cauchy_distribution
function lorentzian(x, x0 = 0, gamma = 1) {
    return (gamma * gamma) / (Math.PI * gamma * (gamma * gamma + (x - x0) * (x - x0)));
}

test('Simple case', t => {
    const size = 70;
    const peakX = 10;
    let times = new Array(size);
    let tic1 = new Array(size);
    let tic2 = new Array(size);
    let ms1 = new Array(size);
    let ms2 = new Array(size);
    for (let i = 0; i < size; ++i) {
        times[i] = i;
        tic1[i] = lorentzian(i, peakX) + 2 * lorentzian(i, 2 * peakX) + 3 * lorentzian(i, 3 * peakX) + lorentzian(i, 4 * peakX) + 2 * lorentzian(i, 5 * peakX);
        tic2[i] = lorentzian(i, 2 * peakX) + 2 * lorentzian(i, 3 * peakX) + lorentzian(i, 4 * peakX) + 2 * lorentzian(i, 5 * peakX) + lorentzian(i, 6 * peakX);
        ms1[i] = [[(i + 10), 2 * (i + 10), 3 * (i + 10)], [1, 1, 1]];
        ms2[i] = [[i, 2 * i, 3 * i], [1, 1, 1]];
    }

    const options = {
        heightFilter: 0
    };

    let chrom1 = new Chromatogram(times);
    chrom1.addSerie({
        dimension: 1,
        name: 'tic',
        data: tic1
    });
    chrom1.addSerie({
        dimension: 2,
        name: 'ms',
        data: ms1
    });

    let chrom2 = new Chromatogram(times);
    chrom2.addSerie({
        dimension: 1,
        name: 'tic',
        data: tic2
    });
    chrom2.addSerie({
        dimension: 2,
        name: 'ms',
        data: ms2
    });

    let compared = spectraComparison(chrom1, chrom2, options);
    t.deepEqual(compared.peaksSimilarity, [1, 1, 1, 1, 1]);
    t.deepEqual(compared.peaksFirst.map((val) => val.x), [10, 20, 30, 40, 50]);
    t.deepEqual(compared.peaksSecond.map((val) => val.x), [20, 30, 40, 50, 60]);
});

test('Shifted peaks', t => {
    const size = 70;
    const peakX = 10;
    let times = new Array(size);
    let tic1 = new Array(size);
    let tic2 = new Array(size);
    let ms1 = new Array(size);
    let ms2 = new Array(size);
    for (let i = 0; i < size; ++i) {
        times[i] = i;
        tic1[i] = lorentzian(i, peakX) + 2 * lorentzian(i, 2 * peakX) + 3 * lorentzian(i, 3 * peakX) + lorentzian(i, 4 * peakX) + 2 * lorentzian(i, 5 * peakX);
        tic2[i] = lorentzian(i, 2 * peakX) + 2 * lorentzian(i, 3 * peakX) + lorentzian(i, 4 * peakX) + 2 * lorentzian(i, 5 * peakX) + lorentzian(i, 6 * peakX);
        ms1[i] = [[i, 2 * i, 3 * i], [1, 1, 1]];
        ms2[i] = [[i, 2 * i, 3 * i], [1, 1, 1]];
    }

    const options = {
        heightFilter: 0
    };

    let chrom1 = new Chromatogram(times);
    chrom1.addSerie({
        dimension: 1,
        name: 'tic',
        data: tic1
    });
    chrom1.addSerie({
        dimension: 2,
        name: 'ms',
        data: ms1
    });

    let chrom2 = new Chromatogram(times);
    chrom2.addSerie({
        dimension: 1,
        name: 'tic',
        data: tic2
    });
    chrom2.addSerie({
        dimension: 2,
        name: 'ms',
        data: ms2
    });

    let compared = spectraComparison(chrom1, chrom2, options);
    t.deepEqual(compared.peaksSimilarity, [1, 1, 1, 1]);
    t.deepEqual(compared.peaksFirst.map((val) => val.x), [20, 30, 40, 50]);
    t.deepEqual(compared.peaksSecond.map((val) => val.x), [20, 30, 40, 50]);
});

test('Remove similar peaks in the similarity matrix column', t => {
    const size = 70;
    const peakX = 10;
    let times = new Array(size);
    let tic1 = new Array(size);
    let tic2 = new Array(size);
    let ms1 = new Array(size);
    let ms2 = new Array(size);
    for (let i = 0; i < size; ++i) {
        times[i] = i;
        tic1[i] = lorentzian(i, peakX) + 2 * lorentzian(i, 2 * peakX) + 3 * lorentzian(i, 3 * peakX) + lorentzian(i, 4 * peakX) + 2 * lorentzian(i, 5 * peakX);
        tic2[i] = lorentzian(i, 2 * peakX) + 2 * lorentzian(i, 3 * peakX) + lorentzian(i, 4 * peakX) + 2 * lorentzian(i, 5 * peakX) + lorentzian(i, 6 * peakX);

        ms1[i] = [[(i + 10), 2 * (i + 10), 3 * (i + 10)], [1, 1, 1]];
        if (i < 45) {
            ms2[i] = [[28, 29, 30, 31, 32, 56, 58, 60, 62, 64, 84, 87, 90, 93, 96], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
        } else {
            ms2[i] = [[i, 2 * i, 3 * i], [1, 1, 1]];
        }
    }

    const options = {
        heightFilter: 0
    };

    let chrom1 = new Chromatogram(times);
    chrom1.addSerie({
        dimension: 1,
        name: 'tic',
        data: tic1
    });
    chrom1.addSerie({
        dimension: 2,
        name: 'ms',
        data: ms1
    });

    let chrom2 = new Chromatogram(times);
    chrom2.addSerie({
        dimension: 1,
        name: 'tic',
        data: tic2
    });
    chrom2.addSerie({
        dimension: 2,
        name: 'ms',
        data: ms2
    });

    let compared = spectraComparison(chrom1, chrom2, options);
    t.deepEqual(compared.peaksSimilarity, [1, 1]);
    t.deepEqual(compared.peaksFirst.map((val) => val.x), [40, 50]);
    t.deepEqual(compared.peaksSecond.map((val) => val.x), [50, 60]);
});
