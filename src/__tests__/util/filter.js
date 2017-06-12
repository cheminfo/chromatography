import {simple4 as chromatogram} from '../data/examples';

describe('filter', () => {
    beforeEach(() => {
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
        expect(chromatogram.getTimes().length).toEqual(1);
        expect(chromatogram.getSerie('ms').data.length).toEqual(1);
        expect(chromatogram.getTimes()).toEqual([2]);
        expect(chromatogram.getSerie('ms').data).toEqual([
            [[102, 202, 302], [12, 22, 32]]
        ]);
    });
});

