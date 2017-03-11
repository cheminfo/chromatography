import test from 'ava';
import {Chromatogram} from '../..';

test('Filter: keep the odd', t => {
    let chromatogram = new Chromatogram([1, 2, 3, 4], {
        ms: [
            [[101, 201, 301], [11, 21, 31]],
            [[102, 202, 302], [12, 22, 32]],
            [[103, 203, 303], [13, 23, 33]],
            [[104, 204, 304], [14, 24, 34]],
        ]
    });
    chromatogram.filter((index) => index % 2);
    t.is(chromatogram.getTimes().length, 2);
    t.is(chromatogram.getSerie('ms').data.length, 2);
    t.deepEqual(chromatogram.getTimes(), [2, 4]);
    t.deepEqual(chromatogram.getSerie('ms').data, [
        [[102, 202, 302], [12, 22, 32]],
        [[104, 204, 304], [14, 24, 34]]
    ]);
});

test('Filter: keep time under a value', t => {
    let chromatogram = new Chromatogram([1, 2, 3, 4], {
        ms: [
            [[101, 201, 301], [11, 21, 31]],
            [[102, 202, 302], [12, 22, 32]],
            [[103, 203, 303], [13, 23, 33]],
            [[104, 204, 304], [14, 24, 34]],
        ]
    });
    chromatogram.filter((index, time) => time < 3);
    t.is(chromatogram.getTimes().length, 2);
    t.is(chromatogram.getSerie('ms').data.length, 2);
    t.deepEqual(chromatogram.getTimes(), [1, 2]);
    t.deepEqual(chromatogram.getSerie('ms').data, [
        [[101, 201, 301], [11, 21, 31]],
        [[102, 202, 302], [12, 22, 32]]
    ]);
});
