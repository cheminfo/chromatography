import test from 'ava';
import {simple4 as chromatogram} from '../data/_examples.js';


test('Filter: keep the odd', t => {
    chromatogram.filter((index,time) => index%2);
    t.is(chromatogram.getTimes().length,2);
    t.is(chromatogram.getSerie('ms').data.length,2);
    t.deepEqual(chromatogram.getTimes(),[2,4]);
    t.deepEqual(chromatogram.getSerie('ms').data,
        [
            [ [ 102, 202, 302 ], [ 12, 22, 32 ] ],
            [ [ 104, 204, 304 ], [ 14, 24, 34 ] ]
        ]
    );
});

test('Filter: keep time under a value', t => {
    chromatogram.filter((index,time) => time<3);
    t.is(chromatogram.getTimes().length,2);
    t.is(chromatogram.getSerie('ms').data.length,2);
    t.deepEqual(chromatogram.getTimes(),[1,2]);
    t.deepEqual(chromatogram.getSerie('ms').data,
        [
            [ [ 101, 201, 301 ], [ 11, 21, 31 ] ],
            [ [ 102, 202, 302 ], [ 12, 22, 32 ] ]
        ]
    );
});