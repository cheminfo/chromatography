import {simple} from '../data/examples.js';

test('simple case', () => {
    simple.calculateTic();
    expect(simple.getSerieNames()).toContain('tic');
    expect(simple.getSerie('tic').data).toEqual([60, 63]);
});
