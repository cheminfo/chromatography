import {simple} from '../../__tests__/examples.js';

test('Create a JSON', () => {
    let json = JSON.stringify(simple);
    expect(json).toContain('series');
    expect(json).toContain('times":[1,2]');
    expect(json).toContain('meta');
});
