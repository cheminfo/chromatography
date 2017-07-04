import {integrate, Chromatogram} from '../..';
import {simple} from '../data/examples';

const lowResolution = new Chromatogram(
    [1, 2], {
        ms: [
            [[100.002, 200.02, 300.0002], [10, 20, 30]],
            [[100.001, 200.01, 300.0001], [11, 21, 31]],
        ]
    }
);

test('High resolution', () => {
    var result = integrate(simple, [1, 2]);
    expect(result).toEqual({ms: [
        [100, 101, 200, 201, 300, 301],
        [10, 11, 20, 21, 30, 31]
    ]});
});

test('Low resolution', () => {
    expect(integrate(lowResolution, [1, 2])).toEqual({ms: [
        [100, 200, 300],
        [21, 41, 61]
    ]});

    expect(integrate(lowResolution, [1, 2], {
        slot: 0.01
    })).toEqual({ms: [
        [100.00, 200.01, 200.02, 300.00],
        [21, 21, 20, 61]
    ]});
});
