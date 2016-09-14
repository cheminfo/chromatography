import test from 'ava';
import {convert} from 'jcampconverter';
import fs from 'fs';
import Promise from 'bluebird';
import {join} from 'path';
import {Chromatogram, massInPeaks, peakPicking} from '..';

const readFileAsync = Promise.promisify(fs.readFile);

// https://en.wikipedia.org/wiki/Cauchy_distribution
function lorentzian(x, x0 = 0, gamma = 1) {
    return (gamma * gamma) / (Math.PI * gamma * (gamma * gamma + (x - x0) * (x - x0)));
}

test('from a Diesel chromatogram', async t => {
    const path = join(__dirname, 'data/jcamp/P064.JDX');
    const jcamp = await readFileAsync(path, 'utf8');
    const data = convert(jcamp, {newGCMS: true}).gcms;
    const chrom = new Chromatogram(data);
    t.is(chrom.length, 6992);

    let peakList = peakPicking(chrom);
    t.is(peakList.length, 312);

    let sampleMS = chrom.findSerieByName('ms').data;
    t.not(sampleMS.length, 0);
    let integratedList = massInPeaks(peakList, sampleMS);
    t.is(peakList.length, integratedList.length);
});

test('triplet', async t => {
    const size = 30;
    const fourth = size / 4;
    let times = new Array(size);
    let tic = new Array(size);
    let ms = new Array(size);
    for (let i = 0; i < size; ++i) {
        times[i] = i;
        tic[i] = lorentzian(i, fourth) + 2 * lorentzian(i, 2 * fourth) + lorentzian(i, 3 * fourth);
        ms[i] = [[1, 2, 3], [1, 1, 1]];
    }
    let chrom = new Chromatogram(times);
    chrom.addSerie({
        dimension: 1,
        name: 'tic',
        data: tic
    });
    chrom.addSerie({
        dimension: 2,
        name: 'ms',
        data: ms
    });

    let peaks = peakPicking(chrom);
    t.is(peaks.length, 1);

    let sampleMS = chrom.findSerieByName('ms').data;
    t.not(sampleMS.length, 0);
    let integratedList = massInPeaks(peaks, sampleMS);
    t.is(peaks.length, integratedList.length);
});

test('simple case', async t => {
    let peaks = [{
        left: {index: 0},
        right: {index: 2}
    }];

    t.deepEqual(massInPeaks(peaks, [
        [
            [1, 2],
            [1, 1]
        ],
        [
            [1, 2, 5],
            [1, 1, 1]
        ],
        [
            [3, 4],
            [1, 1]
        ]
    ]), [{
        left: {index: 0},
        right: {index: 2},
        ms: {
            x: [1, 2, 3, 4, 5],
            y: [2, 2, 1, 1, 1]
        }
    }]);
});
