import test from 'ava';
import {Chromatogram, calculateTic} from '../..';
import {simple as chromatogram} from '../data/_examples.js';

test('simple case', t => {
    calculateTic(chromatogram);
    t.is(chromatogram.getSerieNames().includes('tic'), true);
    t.deepEqual(chromatogram.getSerie('tic').data, [60, 63]);

    calculateTic(chromatogram);
    t.is(chromatogram.getSerieNames().includes('tic'), true);
    t.deepEqual(chromatogram.getSerie('tic').data, [60, 63]);
});

test('check error', t => {
    let chrom = new Chromatogram([0, 1, 2, 3]);
    t.throws(calculateTic.bind(null, chrom), 'The mass serie must be defined');
});
