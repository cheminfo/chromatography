import test from 'ava';
import {Chromatogram, applyLockMass} from '..';

test('simple case', t => {
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

    // em: 622.02951
    let ans = applyLockMass(chrom, 'C12H19F12N3O6P3');

    t.is(ans.tic.length, ms.length / 2);
    t.is(ans.time.length, ms.length / 2);
    t.is(ans.ms.length, ms.length / 2);

    t.deepEqual(ans.tic, [60]);
    t.deepEqual(ans.time, [0]);
    t.deepEqual(ans.ms[0][1], [10, 20, 30]);

    const expectedMass = [100.005, 200.005, 300.005];
    for (var i = 0; i < expectedMass.length; i++) {
        t.is(Math.abs(ans.ms[0][0][i] - expectedMass[i]) < 10e-4, true);
    }
});
