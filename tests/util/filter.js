const should = require('should');
const {simple4: chromatogram} = require('../data/_examples.js');


test('Filter: keep the odd', () => {
    chromatogram.filter((index) => index % 2);
    t.is(chromatogram.getTimes().length, 2);
    t.is(chromatogram.getSerie('ms').data.length, 2);
    t.deepEqual(chromatogram.getTimes(), [2, 4]);
    t.deepEqual(chromatogram.getSerie('ms').data,
        [
            [[102, 202, 302], [12, 22, 32]],
            [[104, 204, 304], [14, 24, 34]]
        ]
    );
});

test('Filter: keep time under a value', () => {
    chromatogram.filter((index, time) => time < 3);
    t.is(chromatogram.getTimes().length, 2);
    t.is(chromatogram.getSerie('ms').data.length, 2);
    t.deepEqual(chromatogram.getTimes(), [1, 2]);
    t.deepEqual(chromatogram.getSerie('ms').data,
        [
            [[101, 201, 301], [11, 21, 31]],
            [[102, 202, 302], [12, 22, 32]]
        ]
    );
});
