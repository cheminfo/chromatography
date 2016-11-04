import test from 'ava';
import {kovatsConversionFunction, rescaleTime} from '..';

const conversionTable = [
    {time: 10, value: 800},
    {time: 20, value: 900},
    {time: 30, value: 1000}
];

test('Simple case', t => {
    const time2kovats = kovatsConversionFunction(conversionTable);
    const inferior = 10;
    const superior = 30;
    const step = 1;

    let time = new Array((superior - inferior) / step);
    let index = 0;
    for (let i = inferior; i < superior; i += step) {
        time[index++] = i;
    }

    const newTime = rescaleTime(time, time2kovats);
    for (let j = 0; j < newTime.length; j++) {
        t.is(newTime[j], time2kovats(time[j]));
    }
});

//test('In place', t => {});
//test('Non-in place', t => {});
