import {Chromatogram} from '../..';
import {simple} from '../data/examples';

test('simple case', () => {
    simple.calculateBpc();
    expect(simple.getSerieNames()).toContain('bpc');
    expect(simple.getSerie('bpc').data).toEqual([30, 31]);
});

test('Errors', () => {
    expect(() => {
        const chrom = new Chromatogram([1, 2, 3, 5, 6]);
        chrom.calculateBpc();
    }).toThrow('The mass serie must be defined');
});
