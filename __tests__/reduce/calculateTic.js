const {calculateTic} = require('../../src/index.js');
const {simple} = require('../data/examples.js');

test('simple case', () => {
    calculateTic(simple);
    expect(simple.getSerieNames()).toContain('tic');
    expect(simple.getSerie('tic').data).toEqual([60, 63]);
});
