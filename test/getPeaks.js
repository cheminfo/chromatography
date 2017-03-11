import test from 'ava';
import fs from 'fs';
import Promise from 'bluebird';
import {join} from 'path';
import {Chromatogram, getPeaks, fromJcamp} from '..';

const readFileAsync = Promise.promisify(fs.readFile);

// https://en.wikipedia.org/wiki/Cauchy_distribution
function lorentzian(x, x0 = 0, gamma = 1) {
    return (gamma * gamma) / (Math.PI * gamma * (gamma * gamma + (x - x0) * (x - x0)));
}

test('from a Diesel chromatogram', async t => {
    const path = join(__dirname, 'data/jcamp/P064.JDX');
    const jcamp = await readFileAsync(path, 'utf8');
    const chrom = fromJcamp(jcamp);
    t.is(chrom.length, 6992);

    let peakList = getPeaks(chrom);
    t.is(peakList.length, 312);
});

test('triplet', t => {
    const size = 60;
    const fourth = size / 4;
    let times = new Array(size);
    let tic = new Array(size);
    let ms = new Array(size);
    for (let i = 0; i < size; ++i) {
        times[i] = i;
        tic[i] = lorentzian(i, fourth, 9) + 2 * lorentzian(i, 2 * fourth, 9) + lorentzian(i, 3 * fourth, 9);
        ms[i] = [[1, 2, 3], [1, 1, 1]];
    }
    let chrom = new Chromatogram(times);
    chrom.addSerie('tic', tic);
    chrom.addSerie('ms', ms);

    let peaks = getPeaks(chrom);
    t.is(peaks.length, 1);
});

test('throws when not send a tic serie', t => {
    const size = 30;
    let times = new Array(size);
    for (let i = 0; i < size; ++i) {
        times[i] = i;
    }
    let chrom = new Chromatogram(times);

    t.throws(getPeaks.bind(null, chrom), '\'tic\' serie not founded');
});
