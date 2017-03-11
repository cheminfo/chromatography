import test from 'ava';
import {simpleStringified} from '../data/_examples.js';
import {fromStringifiedJSON} from '../..';

test('Create a JSON', async t => {
    let newChromatogram = fromStringifiedJSON(simpleStringified);

    t.is(newChromatogram.getSerie('ms').data.length, 2);
    t.is(newChromatogram.times.length, 2);
    t.deepEqual(newChromatogram.getSerieNames(), ['ms']);
});
