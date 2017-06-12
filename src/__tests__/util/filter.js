import {simple4} from '../data/examples';
let chromatogram;

describe('filter', () => {
    beforeEach(() => {
        chromatogram = simple4.copy();
        jest.resetModules();
    });

    test('Keep the odd', () => {
        chromatogram.filter((index) => index % 2);
        expect(chromatogram.getTimes().length).toEqual(2);
        expect(chromatogram.getSerie('ms').data.length).toEqual(2);
        expect(chromatogram.getTimes()).toEqual([2, 4]);
        expect(chromatogram.getSerie('ms').data).toEqual([
            [[102, 202, 302], [12, 22, 32]],
            [[104, 204, 304], [14, 24, 34]]
        ]);
    });

    test('Keep time under a value', () => {
        chromatogram.filter((index, time) => time < 3);
        expect(chromatogram.getTimes().length).toEqual(2);
        expect(chromatogram.getSerie('ms').data.length).toEqual(2);
        expect(chromatogram.getTimes()).toEqual([1, 2]);
        expect(chromatogram.getSerie('ms').data).toEqual([
            [[101, 201, 301], [11, 21, 31]],
            [[102, 202, 302], [12, 22, 32]]
        ]);
    });

    test('Copied object', () => {
        expect(chromatogram.getTimes().length).toEqual(4);
        let copy = chromatogram.filter((index) => index % 2, {copy: true});
        expect(chromatogram.getTimes().length).toEqual(4);
        expect(copy.getTimes().length).toEqual(2);
    });
});

