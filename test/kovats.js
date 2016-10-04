import test from 'ava';
import {kovats} from '..';

test('Simple case', t => {
    t.is(kovats({
        x: [43, 57, 71, 85],
    }), 0);

    t.is(kovats({
        x: [43, 57, 71, 85, 114],
    }), 0);

    t.is(kovats({
        x: [29, 43, 57, 71, 85, 114],
    }), 800);
});
