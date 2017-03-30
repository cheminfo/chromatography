let chromatogram = require('../data/examples.js').simple4;

test('Get closest time', () => {
    // time : [1, 2, 3, 4]

    expect(chromatogram.getClosestTime(0.5)).toEqual({
        index: 0,
        timeBefore: 1,
        timeAfter: 1,
        timeClosest: 1,
        safeIndexBefore: 0,
        safeIndexAfter: 0
    });

    expect(chromatogram.getClosestTime(2)).toEqual({
        index: 1,
        timeBefore: 2,
        timeAfter: 2,
        timeClosest: 2,
        safeIndexBefore: 1,
        safeIndexAfter: 1
    });

    expect(chromatogram.getClosestTime(4.5)).toEqual({
        index: 3,
        timeBefore: 4,
        timeAfter: 4,
        timeClosest: 4,
        safeIndexBefore: 3,
        safeIndexAfter: 3
    });

    expect(chromatogram.getClosestTime(1.1)).toEqual({
        index: 0,
        timeBefore: 1,
        timeAfter: 2,
        timeClosest: 1,
        safeIndexBefore: 0,
        safeIndexAfter: 1
    });

    expect(chromatogram.getClosestTime(1.9)).toEqual({
        index: 1,
        timeBefore: 1,
        timeAfter: 2,
        timeClosest: 2,
        safeIndexBefore: 0,
        safeIndexAfter: 1
    });


});


