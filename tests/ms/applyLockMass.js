|
const {Chromatogram, applyLockMass} = require('../..');

test('simple case', () => {
    let chromatogram = new Chromatogram(
        [1, 2],
        {
            ms: [
                [[100, 200, 300], [10, 20, 30]],
                [[622.024747], [274]]
            ]
        }
    );

    let newLength = chromatogram.getTimes().length / 2;
    applyLockMass(chromatogram, 'C12H19F12N3O6P3'); // em: 622.02951

    expect(chromatogram.getTimes().length).toEqual(newLength);
    expect(chromatogram.length).toEqual(newLength);
    expect(chromatogram.getSerie('ms').data.length).toEqual(newLength);

    expect(chromatogram.getTimes()).toEqual([1]);
    expect(chromatogram.getSerie('ms').data[0][1], [10, 20).toEqual(30]);

    const expectedMass = [100.005, 200.005, 300.005];
    for (let i = 0; i < expectedMass.length; i++) {
        expect(Math.abs(chromatogram.getSerie('ms').data[0][0][i] - expectedMass[i]) < 10e-4).toEqual(true);
    }
});

test('array of mf', () => {
    let chromatogram = new Chromatogram(
        [1, 2],
        {
            ms: [
                [[100, 200, 300], [10, 20, 30]],
                [[622.024747], [274]]
            ]
        }
    );

    let newLength = chromatogram.getTimes().length / 2;
    applyLockMass(chromatogram, ['C12H19F12N3O6P3', 'CCl3H', 'C10H20O3']); // em: 622.02951

    expect(chromatogram.getTimes().length).toEqual(newLength);
    expect(chromatogram.length).toEqual(newLength);
    expect(chromatogram.getSerie('ms').data.length).toEqual(newLength);

    expect(chromatogram.getTimes()).toEqual([1]);
    expect(chromatogram.getSerie('ms').data[0][1], [10, 20).toEqual(30]);

    const expectedMass = [100.005, 200.005, 300.005];
    for (let i = 0; i < expectedMass.length; i++) {
        expect(Math.abs(chromatogram.getSerie('ms').data[0][0][i] - expectedMass[i]) < 10e-4).toEqual(true);
    }
});

test('different references', () => {
    let chromatogram = new Chromatogram(
        [1, 2, 3, 4],
        {
            ms: [
                [[622.024747], [274]],
                [[100, 200, 300], [10, 20, 30]],
                [[188.136240], [272]],
                [[100, 200, 300], [10, 20, 30]],
            ]
        }
    );

    let newLength = chromatogram.getTimes().length / 2;
    applyLockMass(chromatogram, ['C12H19F12N3O6P3', 'C10H20O3'],
        {
            oddReference: false
        }
    ); // em: 622.02951

    expect(chromatogram.getTimes().length).toEqual(newLength);
    expect(chromatogram.length).toEqual(newLength);
    expect(chromatogram.getSerie('ms').data.length).toEqual(newLength);

    expect(chromatogram.getTimes(), [2).toEqual(4]);
    expect(chromatogram.getSerie('ms').data[0][1], [10, 20).toEqual(30]);
    expect(chromatogram.getSerie('ms').data[1][1], [10, 20).toEqual(30]);

    const expectedMass = [100.005, 200.005, 300.005];
    for (let i = 0; i < expectedMass.length; i++) {
        expect(Math.abs(chromatogram.getSerie('ms').data[0][0][i] - expectedMass[i]) < 10e-4).toEqual(true);
        expect(Math.abs(chromatogram.getSerie('ms').data[1][0][i] - expectedMass[i]) < 10e-4).toEqual(true);
    }
});

test('check exceptions', () => {
    let chromatogram = new Chromatogram(
        [1]
    );

    t.throws(applyLockMass.bind(null, chromatogram, 'C12H19F12N3O6P3'), 'The mass serie must be defined');

    chromatogram.addSerie('ms', [[[622.024747], [274]]]);
    t.throws(applyLockMass.bind(null, chromatogram, 'C12H19F12N3O6P3'), 'The series must have an even size');
});
