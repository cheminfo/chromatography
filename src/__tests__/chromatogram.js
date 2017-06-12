import {Chromatogram} from '..';
import {chromato} from './data/examples';

describe('General methods', () => {
    test('Constructor errors', () => {
        expect(() => {
            new Chromatogram({a: 1});
        }).toThrow('Times must be an array');
        expect(() => {
            new Chromatogram(12);
        }).toThrow('Times must be an array');
        expect(() => {
            new Chromatogram();
        }).toThrow('The time serie is mandatory');
    });

    test('get first and last time', () => {
        let chrom = new Chromatogram([1, 2, 3]);
        expect(chrom.firstTime).toEqual(1);
        expect(chrom.lastTime).toEqual(3);
    });

    test('addSerie errors', () => {
        let chromatogram = new Chromatogram([1, 2], {tic: [1, 2]});
        expect(() => chromatogram.addSerie('abc', 1234)).toThrow('The array size is not the same as the time size');
        expect(() => chromatogram.addSerie('abc', {a: 1, b: 2})).toThrow('The array size is not the same as the time size');
        expect(() => chromatogram.addSerie('tic', [2, 3, 4])).toThrow('A serie with name "tic" already exists');

        expect(() => chromatogram.addSeries(1)).toThrow('data must be an object containing arrays of series');
    });

    test('deleteSerie', () => {
        let chromatogram = new Chromatogram([1, 2], {tic: [1, 2]});
        expect(chromatogram.hasSerie('tic')).toEqual(true);
        expect(() => chromatogram.deleteSerie('ms')).toThrow('The serie "ms" does not exist');
        chromatogram.deleteSerie('tic');
        expect(chromatogram.hasSerie('tic')).toEqual(false);
    });

    test('Copy chromatogram', () => {
        let chromatogram = new Chromatogram([1, 2], {tic: [1, 2]});
        expect(chromatogram.hasSerie('tic')).toEqual(true);
        let copy = chromatogram.copy();
        expect(copy.hasSerie('tic')).toEqual(true);
        copy.deleteSerie('tic');
        expect(copy.hasSerie('tic')).toEqual(false);
        expect(chromatogram.hasSerie('tic')).toEqual(true);
    });

    test('Require serie', () => {
        let chromatogram = new Chromatogram([1, 2], {tic: [1, 2]});
        expect(() => chromatogram.requiresSerie('ms')).toThrow('The serie "ms" does not exist');
        expect(() => chromatogram.requiresSerie('tic')).not.toThrow('The serie "tic" does not exist');
    });
});

test('Integrate a tic', () => {
    var result = chromato.getIntegrations([1.5, 5.5]);
    expect(result).toEqual({tic: [125]});
});
