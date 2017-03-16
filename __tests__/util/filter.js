var chromatogram;

describe('filter', () => {
    beforeEach(() => {
        jest.resetModules();
        chromatogram = require('../data/examples.js').simple4;
    });

    test('Filter: keep the odd', () => {
        chromatogram.filter((index) => index % 2);
        expect(chromatogram.getTimes().length).toEqual(2);
        expect(chromatogram.getSerie('ms').data.length).toEqual(2);
        expect(chromatogram.getTimes()).toEqual([2, 4]);
        expect(chromatogram.getSerie('ms').data).toEqual(
            [
                [[102, 202, 302], [12, 22, 32]],
                [[104, 204, 304], [14, 24, 34]]
            ]
        );
    });

    test('Filter: keep time under a value', () => {
        chromatogram.filter((index, time) => time < 3);
        expect(chromatogram.getTimes().length).toEqual(2);
        expect(chromatogram.getSerie('ms').data.length).toEqual(2);
        expect(chromatogram.getTimes()).toEqual([1, 2]);
        expect(chromatogram.getSerie('ms').data).toEqual(
            [
                [[101, 201, 301], [11, 21, 31]],
                [[102, 202, 302], [12, 22, 32]]
            ]
        );
    });

});

