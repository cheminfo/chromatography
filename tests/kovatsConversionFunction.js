const {kovatsConversionFunction} = require('..');

const conversionTable = [
    {time: 10, value: 800},
    {time: 20, value: 900},
    {time: 30, value: 1000}
];

test('from time to kovats', () => {
    const time2kovats = kovatsConversionFunction(conversionTable);
    expect(time2kovats(10)).toEqual(800);
    expect(time2kovats(15)).toEqual(850);
    expect(time2kovats(20)).toEqual(900);
    expect(time2kovats(25)).toEqual(950);
    expect(time2kovats(30)).toEqual(1000);
});

test('from kovats to time', () => {
    const kovats2time = kovatsConversionFunction(conversionTable, {revert: true});
    expect(kovats2time(800)).toEqual(10);
    expect(kovats2time(850)).toEqual(15);
    expect(kovats2time(900)).toEqual(20);
    expect(kovats2time(950)).toEqual(25);
    expect(kovats2time(1000)).toEqual(30);
});
