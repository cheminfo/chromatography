import test from 'ava';
import {kovatsConversionFunction} from '..';

const conversionTable = [
    {time: 10, value: 800},
    {time: 20, value: 900},
    {time: 30, value: 1000}
];

test('from time to kovats', t => {
    const time2kovats = kovatsConversionFunction(conversionTable);
    t.is(time2kovats(10), 800);
    t.is(time2kovats(15), 850);
    t.is(time2kovats(20), 900);
    t.is(time2kovats(25), 950);
    t.is(time2kovats(30), 1000);
});

test('from kovats to time', t => {
    const kovats2time = kovatsConversionFunction(conversionTable, {revert: true});
    t.is(kovats2time(800), 10);
    t.is(kovats2time(850), 15);
    t.is(kovats2time(900), 20);
    t.is(kovats2time(950), 25);
    t.is(kovats2time(1000), 30);
});
