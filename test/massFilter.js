import test from 'ava';
import {massFilter, massInPeaks, vectorify} from '..';

test('thresholdFactor', t => {
    let mass = {
        x: [1, 2, 4, 5],
        y: [2, 3, 2, 1]
    };

    t.deepEqual(massFilter(mass, {thresholdFactor: 0.5}), {
        x: [1, 2, 4],
        y: [2, 3, 2]
    });
});

test('maxNumberPeaks', t => {
    let mass = {
        x: [1, 2, 3, 4, 5],
        y: [2, 3, 2, 1, 3]
    };

    t.deepEqual(massFilter(mass, {maxNumberPeaks: 2}), {
        x: [2, 5],
        y: [3, 3]
    });
});

test('groupWidth', t => {
    let mass = {
        x: [1, 2, 3, 5, 6],
        y: [4, 5, 4, 3, 1]
    };

    t.deepEqual(massFilter(mass, {groupWidth: 2}), {
        x: [2, 5],
        y: [5, 3]
    });
});

test('from massInPeaks', t => {
    let peaks = [{
        left: {index: 0},
        right: {index: 2}
    }];
    let mass = [
        [[1, 2], [1, 1]],
        [[1, 2, 5], [1, 1, 1]],
        [[2, 4], [1, 1]]
    ];

    peaks = massInPeaks(peaks, mass, {thresholdFactor: 0.5});
    t.deepEqual(peaks, [{
        left: {index: 0},
        right: {index: 2},
        ms: {
            x: [1, 2],
            y: [2, 3]
        }
    }]);
});

test('from vectorify', t => {
    let peaks = [
        {ms: {
            x: [1, 2, 3],
            y: [1, 1, 1]
        }}
    ];
    let vector = vectorify(peaks, {thresholdFactor: 0.5, massPower: 1});

    t.deepEqual(vector, [{
        x: [2, 3],
        y: [2, 3]
    }]);
});
