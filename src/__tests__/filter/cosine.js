import {readFileSync} from 'fs';
import {join} from 'path';
import {Chromatogram, massInPeaks, getPeaks, vectorify, cosine, fromJcamp} from '../..';
import {lorentzian} from '../data/examples';

test('from a Diesel chromatogram', () => {
    const path = join(__dirname, '../../../testFiles/jcamp/P064.JDX');
    const jcamp = readFileSync(path, 'utf8');
    const chrom = fromJcamp(jcamp);
    expect(chrom.length).toEqual(6992);

    let peakList = getPeaks(chrom);
    expect(peakList.length).toEqual(312);

    let sampleMS = chrom.getSerie('ms').data;
    expect(sampleMS.length).not.toBe(0);
    let integratedList = massInPeaks(peakList, sampleMS);
    expect(peakList.length).toEqual(integratedList.length);

    let vector = vectorify(integratedList);
    expect(vector.length).toEqual(peakList.length);

    for (let i = 0; i < peakList.length; ++i) {
        expect(cosine(vector[i].x, vector[i].y, vector[i].x, vector[i].y)).toEqual(1);
    }
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
    expect(sampleMS.length).not.toBe(0);
    let integratedList = massInPeaks(peakList, sampleMS);
    expect(peakList.length).toEqual(integratedList.length);

    let vector = vectorify(integratedList);
    expect(vector.length).toEqual(peakList.length);

    for (let i = 0; i < peakList.length; ++i) {
        expect(cosine(vector[i].x, vector[i].y, vector[i].x, vector[i].y)).toEqual(1);
    }
});

test('simple case', () => {
    expect(cosine([1, 2, 3], [1, 1, 1], [1, 2, 3], [1, 1, 1])).toEqual(1);
    expect(cosine([1, 2, 3], [1, 1, 1], [1, 2, 4], [1, 1, 1])).toEqual(4 / 9);
    expect(cosine([1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3])).toEqual(1);
    expect(cosine([1, 2, 3, 4], [1, 1, 1, 1], [1, 2, 4, 5], [1, 1, 1, 1])).toEqual(9 / 16);
    expect(cosine([1, 2, 3, 4], [1, 1, 1, 1], [4, 5], [1, 1])).toEqual(1 / 8);
    expect(cosine([], [], [], [])).toEqual(0);
});
