import test from 'ava';
import {Chromatogram, applyLockMass} from '../..';

test('simple case', t => {
    let chromatogram=new Chromatogram(
        [1,2],
        {
            ms:[
                [[100, 200, 300], [10, 20, 30]],
                [[622.024747], [274]]
            ]
        }
    );

    let newLength=chromatogram.getTimes().length/2;
    applyLockMass(chromatogram, 'C12H19F12N3O6P3'); // em: 622.02951

    t.is(chromatogram.getTimes().length, newLength);
    t.is(chromatogram.length, newLength);
    t.is(chromatogram.getSerie('ms').data.length, newLength);

    t.deepEqual(chromatogram.getTimes(), [1]);
    t.deepEqual(chromatogram.getSerie('ms').data[0][1], [10, 20, 30]);

    const expectedMass = [100.005, 200.005, 300.005];
    for (let i = 0; i < expectedMass.length; i++) {
        t.is(Math.abs(chromatogram.getSerie('ms').data[0][0][i] - expectedMass[i]) < 10e-4, true);
    }
});

test('array of mf', t => {
    let chromatogram=new Chromatogram(
        [1,2],
        {
            ms:[
                [[100, 200, 300], [10, 20, 30]],
                [[622.024747], [274]]
            ]
        }
    );

    let newLength=chromatogram.getTimes().length/2;
    applyLockMass(chromatogram, ['C12H19F12N3O6P3', 'CCl3H', 'C10H20O3']); // em: 622.02951

    t.is(chromatogram.getTimes().length, newLength);
    t.is(chromatogram.length, newLength);
    t.is(chromatogram.getSerie('ms').data.length, newLength);

    t.deepEqual(chromatogram.getTimes(), [1]);
    t.deepEqual(chromatogram.getSerie('ms').data[0][1], [10, 20, 30]);

    const expectedMass = [100.005, 200.005, 300.005];
    for (let i = 0; i < expectedMass.length; i++) {
        t.is(Math.abs(chromatogram.getSerie('ms').data[0][0][i] - expectedMass[i]) < 10e-4, true);
    }
});

test('different references', t => {
    let chromatogram=new Chromatogram(
        [1,2,3,4],
        {
            ms:[
                [[622.024747], [274]],
                [[100, 200, 300], [10, 20, 30]],
                [[188.136240], [272]],
                [[100, 200, 300], [10, 20, 30]],
            ]
        }
    );

    let newLength=chromatogram.getTimes().length/2;
    applyLockMass(chromatogram, ['C12H19F12N3O6P3', 'C10H20O3'],
        {
            oddReference:false
        }
    ); // em: 622.02951

    t.is(chromatogram.getTimes().length, newLength);
    t.is(chromatogram.length, newLength);
    t.is(chromatogram.getSerie('ms').data.length, newLength);

    t.deepEqual(chromatogram.getTimes(), [2,4]);
    t.deepEqual(chromatogram.getSerie('ms').data[0][1], [10, 20, 30]);
    t.deepEqual(chromatogram.getSerie('ms').data[1][1], [10, 20, 30]);

    const expectedMass = [100.005, 200.005, 300.005];
    for (let i = 0; i < expectedMass.length; i++) {
        t.is(Math.abs(chromatogram.getSerie('ms').data[0][0][i] - expectedMass[i]) < 10e-4, true);
        t.is(Math.abs(chromatogram.getSerie('ms').data[1][0][i] - expectedMass[i]) < 10e-4, true);
    }
});

test('check exceptions', t => {
    let chromatogram=new Chromatogram(
        [1]
    );

    t.throws(applyLockMass.bind(null, chromatogram, 'C12H19F12N3O6P3'), 'The mass serie must be defined');

    chromatogram.addSerie('ms',[[[622.024747], [274]]]);
    t.throws(applyLockMass.bind(null, chromatogram, 'C12H19F12N3O6P3'), 'The series must have an even size');
});
