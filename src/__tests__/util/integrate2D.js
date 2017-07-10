import {integrate, Chromatogram} from '../..';
import {integrate2D} from '../../util/integrate2D';
import {simple} from '../data/examples';

const highResolution = new Chromatogram(
    [1, 2], {
        ms: [
            [[100.002, 200.02, 300.0002], [10, 20, 30]],
            [[100.001, 200.01, 300.0001], [11, 21, 31]],
        ]
    }
);

test('Low resolution', () => {
    var result = integrate(simple, [1, 2]);
    expect(result).toEqual({ms: [
        [100, 101, 200, 201, 300, 301],
        [10, 11, 20, 21, 30, 31]
    ]});
});

test('High resolution', () => {
    expect(integrate(highResolution, [1, 2])).toEqual({ms: [
        [100, 200, 300],
        [21, 41, 61]
    ]});

    expect(integrate(highResolution, [1, 2], {
        slot: 0.01
    })).toEqual({ms: [
        [100.00, 200.01, 200.02, 300.00],
        [21, 21, 20, 61]
    ]});
});

test('Errors', () => {
    expect(() => integrate2D([])).toThrow('The serie is not of dimension 2');
    expect(integrate2D({dimension: 2})).toEqual([]);
});

test('range integration', () => {
    const integral = integrate(highResolution, [1, 2], {
        method: 'range',
        slot: 0.01
    }).ms;

    const result = [100.0015, 200.01, 200.02, 300.00015];
    for (var i = 0; i < result.length; i++) {
        expect(integral[0][i]).toBeCloseTo(result[i], 5);
    }
    expect(integral[1]).toEqual([21, 21, 20, 61]);
});
