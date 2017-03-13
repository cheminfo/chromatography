|
const fs = require('fs');
const Promise = require('bluebird');
const {join} = require('path');
const {Chromatogram, massInPeaks, getPeaks, vectorify, fromJcamp} = require('..');

const readFileAsync = Promise.promisify(fs.readFile);

// https://en.wikipedia.org/wiki/Cauchy_distribution
function lorentzian(x, x0 = 0, gamma = 1) {
    return (gamma * gamma) / (Math.PI * gamma * (gamma * gamma + (x - x0) * (x - x0)));
}

test('from a Diesel chromatogram', async () => {
    const path = join(__dirname, 'data/jcamp/P064.JDX');
    const jcamp = await readFileAsync(path, 'utf8');
    const chrom = fromJcamp(jcamp);
    expect(chrom.length).toEqual(6992);

    let peakList = getPeaks(chrom);
    expect(peakList.length).toEqual(312);

    let sampleMS = chrom.getSerie('ms').data;
    t.not(sampleMS.length, 0);
    let integratedList = massInPeaks(peakList, sampleMS);
    expect(peakList.length).toEqual(integratedList.length);

    let vector = vectorify(integratedList);
    expect(vector.length).toEqual(peakList.length);
});

test('triplet', () => {
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
    chrom.addSerie('tic', tic);
    chrom.addSerie('ms', ms);

    let peakList = getPeaks(chrom);
    expect(peakList.length).toEqual(1);

    let sampleMS = chrom.getSerie('ms').data;
    t.not(sampleMS.length, 0);
    let integratedList = massInPeaks(peakList, sampleMS);
    expect(peakList.length).toEqual(integratedList.length);

    let vector = vectorify(integratedList);
    expect(vector.length).toEqual(peakList.length);
});

test('simple case', () => {
    let peaks = [
        {ms: {
            x: [1, 2, 3],
            y: [1, 1, 1]
        }}
    ];

    t.deepEqual(vectorify(peaks, {massPower: 1}), [{
        x: [1, 2, 3],
        y: [1, 2, 3]
    }]);

    t.deepEqual(vectorify(peaks), [{
        x: [1, 2, 3],
        y: [1, 8, 27]
    }]);
});
