import {Chromatogram} from '../..';

test('simple case', () => {
    let chromatogram = new Chromatogram(
        [1, 2], {
            ms: [
                [[100, 200, 300], [10, 20, 30]],
                [[622.024747], [274]]
            ]
        }
    );

    let newLength = chromatogram.getTimes().length / 2;
    chromatogram.applyLockMass('C12H19F12N3O6P3'); // em: 622.02951

    expect(chromatogram.getTimes().length).toEqual(newLength);
    expect(chromatogram.length).toEqual(newLength);
    expect(chromatogram.getSerie('ms').data.length).toEqual(newLength);

    expect(chromatogram.getTimes()).toEqual([1]);
    expect(chromatogram.getSerie('ms').data[0][1]).toEqual([10, 20, 30]);

    const expectedMass = [100.005, 200.005, 300.005];
    for (let i = 0; i < expectedMass.length; i++) {
        expect(chromatogram.getSerie('ms').data[0][0][i]).toBeCloseTo(expectedMass[i], 3);
    }
});

test('array of mf', () => {
    let chromatogram = new Chromatogram(
        [1, 2], {
            ms: [
                [[100, 200, 300], [10, 20, 30]],
                [[622.024747], [274]]
            ]
        }
    );

    let newLength = chromatogram.getTimes().length / 2;
    chromatogram.applyLockMass(['C12H19F12N3O6P3', 'CCl3H', 'C10H20O3']); // em: 622.02951

    expect(chromatogram.getTimes().length).toEqual(newLength);
    expect(chromatogram.length).toEqual(newLength);
    expect(chromatogram.getSerie('ms').data.length).toEqual(newLength);

    expect(chromatogram.getTimes()).toEqual([1]);
    expect(chromatogram.getSerie('ms').data[0][1]).toEqual([10, 20, 30]);

    const expectedMass = [100.005, 200.005, 300.005];
    for (let i = 0; i < expectedMass.length; i++) {
        expect(Math.abs(chromatogram.getSerie('ms').data[0][0][i] - expectedMass[i]) < 10e-4).toEqual(true);
    }
});

test('different references', () => {
    let chromatogram = new Chromatogram(
        [1, 2, 3, 4], {
            ms: [
                [[10, 622.024747, 100, 200], [10, 274, 40, 50]],
                [[100, 200, 300], [10, 20, 30]],
                [[188.136240], [272]],
                [[100, 200, 300], [10, 20, 30]],
            ]
        }
    );

    let newLength = chromatogram.getTimes().length / 2;
    chromatogram.applyLockMass(['C12H19F12N3O6P3', 'C10H20O3'],
        {
            oddReference: false
        }
    ); // em: 622.02951

    expect(chromatogram.getTimes().length).toEqual(newLength);
    expect(chromatogram.length).toEqual(newLength);
    expect(chromatogram.getSerie('ms').data.length).toEqual(newLength);

    expect(chromatogram.getTimes()).toEqual([2, 4]);
    expect(chromatogram.getSerie('ms').data[0][1]).toEqual([10, 20, 30]);
    expect(chromatogram.getSerie('ms').data[1][1]).toEqual([10, 20, 30]);

    const expectedMass = [100.005, 200.005, 300.005];
    console.log(chromatogram.getSerie('ms').data[0][0]);
    for (let i = 0; i < expectedMass.length; i++) {
        expect(Math.abs(chromatogram.getSerie('ms').data[0][0][i] - expectedMass[i]) < 10e-4).toEqual(true);
        expect(Math.abs(chromatogram.getSerie('ms').data[1][0][i] - expectedMass[i]) < 10e-4).toEqual(true);
    }
});

test('check exceptions', () => {
    let chromatogram = new Chromatogram([1]);
    expect(() => chromatogram.applyLockMass('C12H19F12N3O6P3')).toThrow('The "ms" serie must be defined');

    chromatogram.addSerie('ms', [[[622.024747], [274]]]);
    expect(() => chromatogram.applyLockMass('C12H19F12N3O6P3')).toThrow('The series must have an even size');
});
