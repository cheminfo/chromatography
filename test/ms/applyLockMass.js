import test from 'ava';
import {Chromatogram, applyLockMass} from '../..';

test('simple case', t => {
    var chromatogram=new Chromatogram(
        [1,2],
        {
            ms:[
                [[100, 200, 300], [10, 20, 30]],
                [[622.024747], [274]]
            ]
        }
    );

    // em: 622.02951
    let result = applyLockMass(chromatogram, 'C12H19F12N3O6P3');
    console.log(result.series.ms.data);
    // t.is(result.tic.length, ms.length / 2);
    // t.is(result.time.length, ms.length / 2);
    // t.is(result.ms.length, ms.length / 2);
    //
    // t.deepEqual(result.tic, [60]);
    // t.deepEqual(result.time, [0]);
    // t.deepEqual(result.ms[0][1], [10, 20, 30]);
    //
    // const expectedMass = [100.005, 200.005, 300.005];
    // for (var i = 0; i < expectedMass.length; i++) {
    //     t.is(Math.abs(result.ms[0][0][i] - expectedMass[i]) < 10e-4, true);
    // }
});

test('array of mf', t => {
    let ms = [
        [[100, 200, 300], [10, 20, 30]],
        [[622.024747], [274]]
    ];

    let times = new Array(ms.length);
    for (let i = 0; i < ms.length; ++i) {
        times[i] = i;
    }

    let chrom = new Chromatogram(times);
    chrom.addSerie({
        dimension: 2,
        name: 'ms',
        data: ms
    });

    let result = applyLockMass(chrom, ['C12H19F12N3O6P3', 'CCl3H', 'C10H20O3']);

    t.is(result.tic.length, ms.length / 2);
    t.is(result.time.length, ms.length / 2);
    t.is(result.ms.length, ms.length / 2);

    t.deepEqual(result.tic, [60]);
    t.deepEqual(result.time, [0]);
    t.deepEqual(result.ms[0][1], [10, 20, 30]);

    const expectedMass = [100.005, 200.005, 300.005];
    for (var i = 0; i < expectedMass.length; i++) {
        t.is(Math.abs(result.ms[0][0][i] - expectedMass[i]) < 10e-4, true);
    }
});

test('different references', t => {
    let ms = [
        [[100, 200, 300], [10, 20, 30]],
        [[622.024747], [274]],
        [[100, 200, 300], [10, 20, 30]],
        [[188.136240], [272]],
    ];

    let times = new Array(ms.length);
    for (let i = 0; i < ms.length; ++i) {
        times[i] = i;
    }

    let chrom = new Chromatogram(times);
    chrom.addSerie({
        dimension: 2,
        name: 'ms',
        data: ms
    });

    let result = applyLockMass(chrom, ['C12H19F12N3O6P3', 'C10H20O3']);

    t.is(result.tic.length, ms.length / 2);
    t.is(result.time.length, ms.length / 2);
    t.is(result.ms.length, ms.length / 2);

    t.deepEqual(result.tic, [60, 60]);
    t.deepEqual(result.time, [0, 2]);
    t.deepEqual(result.ms[0][1], [10, 20, 30]);
    t.deepEqual(result.ms[1][1], [10, 20, 30]);

    const expectedMass = [100.005, 200.005, 300.005];
    for (var i = 0; i < expectedMass.length; i++) {
        t.is(Math.abs(result.ms[0][0][i] - expectedMass[i]) < 10e-4, true);
        t.is(Math.abs(result.ms[1][0][i] - expectedMass[i]) < 10e-4, true);
    }
});

test('check exceptions', t => {
    let ms = [
        [[622.024747], [274]]
    ];

    let times = new Array(ms.length);
    for (let i = 0; i < ms.length; ++i) {
        times[i] = i;
    }

    let chrom = new Chromatogram(times);

    t.throws(applyLockMass.bind(null, chrom, 'C12H19F12N3O6P3'), 'The mass serie must be defined');

    chrom.addSerie({
        dimension: 2,
        name: 'ms',
        data: ms
    });
    t.throws(applyLockMass.bind(null, chrom, 'C12H19F12N3O6P3'), 'The series must have an even size');
});
