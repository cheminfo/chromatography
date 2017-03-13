const fs = require('fs');
const Promise = require('bluebird');
const {join} = require('path');
const {Chromatogram, fromJcamp} = require('..');
const getSimulatedSpectrum = require('../data/examples').getSimulatedSpectrum;



const readFileAsync = Promise.promisify(fs.readFile);


test('from a Diesel chromatogram', async () => {
    const path = join(__dirname, 'data/jcamp/P064.JDX');
    const jcamp = await readFileAsync(path, 'utf8');
    const chrom = fromJcamp(jcamp);
    expect(chrom.length).toEqual(6992);

    let peakList = chrom.getPeaks();
    expect(peakList.length).toEqual(312);
});

test('triplet', () => {
    let chromatogram=getSimulatedSpectrum({size: 60})
    let peaks = chromatogram.getPeaks();
    expect(peaks.length).toEqual(1);
});

test('throws when not send a tic serie', () => {
    const size = 30;
    let times = new Array(size);
    for (let i = 0; i < size; ++i) {
        times[i] = i;
    }
    let chromatogram = new Chromatogram(times);

    expect(() => chromatogram.getPeaks(), '\'tic\' serie not founded');
});
