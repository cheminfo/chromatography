import test from 'ava';
import {calculateTic} from '../..';
import {simple as chromatogram} from '../data/_examples.js';

test('simple case', t => {
    calculateTic(chromatogram);
    t.is(chromatogram.getSerieNames().includes('tic'),true);
    t.deepEqual(chromatogram.getSerie('tic').data, [60, 63]);
});
