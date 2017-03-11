import test from 'ava';
import {simple} from '../data/_examples.js';

test('Create a JSON', async t => {
    let json=simple.toStringifiedJSON();
    t.is(json.includes('series'), true);
    t.is(json.includes('times":[1,2]'), true);
    t.is(json.includes('meta'), true);
});
