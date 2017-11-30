import {merge, Chromatogram} from '../..';
import {simple} from '../../__tests__/examples';

const highResolution = new Chromatogram(
    [1, 2], {
        ms: [
            [[100.002, 200.02, 300.0002], [10, 20, 30]],
            [[100.001, 200.01, 300.0001], [11, 21, 31]],
        ]
    }
);

test('Low resolution', () => {
    var result = merge(simple, 'ms', [[1, 2]]);
    expect(result).toEqual([{
        serie: [
            [100, 101, 200, 201, 300, 301],
            [10, 11, 20, 21, 30, 31]
        ],
        from: {
            time: 1,
            index: 0
        },
        to: {
            time: 2,
            index: 1
        }
    }]);
});

test('High resolution', () => {
    expect(merge(highResolution, 'ms', [[1, 2]])).toEqual([{
        serie: [
            [100, 200, 300],
            [21, 41, 61]
        ],
        from: {
            time: 1,
            index: 0
        },
        to: {
            time: 2,
            index: 1
        }
    }]);

    expect(merge(highResolution, 'ms', [[1, 2]], {
        delta: 0.01
    })).toEqual([{
        serie: [
            [100.00, 200.01, 200.02, 300.00],
            [21, 21, 20, 61]
        ],
        from: {
            time: 1,
            index: 0
        },
        to: {
            time: 2,
            index: 1
        }
    }]);
});

test('Errors', () => {
    expect(() => merge(simple, 'ms', 123)).toThrow('ranges must be an array of type [[from,to]]');
    expect(() => merge(simple, 'ms', [[1, 2]], {algorithm: 'null'})).toThrow('Unknown algorithm "null"');

    var tic = new Chromatogram([1, 2, 3, 4], {tic: [2, 4, 6, 8]});
    expect(() => merge(tic, 'tic', [[1, 2]])).toThrow('The serie is not of dimension 2');
});

describe('centroid integration', () => {
    test('symmetric case', () => {
        const integral = merge(highResolution, 'ms', [[1, 2]], {
            algorithm: 'centroid',
            delta: 0.01
        })[0].serie;

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
        const integral = merge(new Chromatogram(
            [1, 2], {
                ms: [
                    [[100.002, 200.01], [10, 21]],
                    [[100.001, 300.0001, 300.0002, 300.0003, 400], [11, 30, 31, 32, 40]],
                ]
            }
        ), 'ms', [[1, 2]], {
            algorithm: 'centroid',
            delta: 0.01
        })[0].serie;

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
        const integral = merge(new Chromatogram(
            [1, 2], {
                ms: [
                    [[100.002, 200.02, 300.0002, 300.0003, 400], [10, 20, 30, 32, 40]],
                    [[100.001, 300.0001], [11, 31]],
                ]
            }
        ), 'ms', [[1, 2]], {
            algorithm: 'centroid',
            delta: 0.01
        })[0].serie;

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

describe('centroid edge cases', () => {
    test('single spectra', () => {
        const integral = merge(new Chromatogram(
            [1], {
                ms: [
                    [[300.001, 300.010, 300.019], [10, 20, 30]]
                ]
            }
        ), 'ms', [[1]], {
            algorithm: 'centroid',
            delta: 0.01
        })[0].serie;

        const result = (300.001 * 10 + 300.010 * 20 + 300.019 * 30) / 60;
        expect(integral[0][0]).toBeCloseTo(result, 5);
        expect(integral[1][0]).toBe(60);
    });

    test('two spectra', () => {
        const integral = merge(new Chromatogram(
            [1, 2], {
                ms: [
                    [[300.001, 300.019], [10, 30]],
                    [[300.010], [20]]
                ]
            }
        ), 'ms', [[1, 2]], {
            algorithm: 'centroid',
            delta: 0.01
        })[0].serie;

        const result = (300.001 * 10 + 300.010 * 20 + 300.019 * 30) / 60;
        expect(integral[0][0]).toBeCloseTo(result, 5);
        expect(integral[1][0]).toBe(60);
    });

    test('three spectra', () => {
        const integral = merge(new Chromatogram(
            [1, 2, 3], {
                ms: [
                    [[300.001], [10]],
                    [[300.019], [30]],
                    [[300.010], [20]]
                ]
            }
        ), 'ms', [[1, 3]], {
            algorithm: 'centroid',
            delta: 0.01
        })[0].serie;

        const result = (300.001 * 10 + 300.010 * 20 + 300.019 * 30) / 60;
        expect(integral[0][0]).toBeCloseTo(result, 5);
        expect(integral[1][0]).toBe(60);
    });
});
