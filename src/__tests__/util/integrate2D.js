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
    expect(() => integrate2D({dimension: 2, data: []}, 1, 2, 1, 'null')).toThrow('Unknown method "null"');
    expect(integrate2D({dimension: 2})).toEqual([]);
});

describe('range integration', () => {
    test('symmetric case', () => {
        const integral = integrate(highResolution, [1, 2], {
            method: 'range',
            slot: 0.01
        }).ms;

        const result = [
            (100.002 * 10 + 100.001 * 11) / 21,
            200.01, 200.02,
            (300.0002 * 30 + 300.0001 * 31) / 61];
        for (var i = 0; i < result.length; i++) {
            expect(integral[0][i]).toBeCloseTo(result[i], 5);
        }
        expect(integral[1]).toEqual([21, 21, 20, 61]);
    });

    test('asymmetric to right', () => {
        const integral = integrate(new Chromatogram(
            [1, 2], {
                ms: [
                    [[100.002, 200.01], [10, 21]],
                    [[100.001, 300.0001, 300.0002, 300.0003, 400], [11, 30, 31, 32, 40]],
                ]
            }
        ), [1, 2], {
            method: 'range',
            slot: 0.01
        }).ms;

        const result = [
            (100.002 * 10 + 100.001 * 11) / 21,
            200.01,
            (300.0002 * 30 + 300.0001 * 31 + 300.0003 * 32) / 93,
            400
        ];
        for (var i = 0; i < result.length; i++) {
            expect(integral[0][i]).toBeCloseTo(result[i], 5);
        }
        expect(integral[1]).toEqual([21, 21, 93, 40]);
    });

    test('asymmetric to left', () => {
        const integral = integrate(new Chromatogram(
            [1, 2], {
                ms: [
                    [[100.002, 200.02, 300.0002, 300.0003, 400], [10, 20, 30, 32, 40]],
                    [[100.001, 300.0001], [11, 31]],
                ]
            }
        ), [1, 2], {
            method: 'range',
            slot: 0.01
        }).ms;

        const result = [
            (100.002 * 10 + 100.001 * 11) / 21,
            200.02,
            (300.0002 * 30 + 300.0001 * 31 + 300.0003 * 32) / 93,
            400
        ];
        for (var i = 0; i < result.length; i++) {
            expect(integral[0][i]).toBeCloseTo(result[i], 5);
        }
        expect(integral[1]).toEqual([21, 20, 93, 40]);
    });
});
