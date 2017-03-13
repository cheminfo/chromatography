const should = require('should');
const {calculateTic} = require('../..');
const {simple} = require('../data/_examples.js');

test('simple case', () => {
    calculateTic(simple);
    t.is(simple.getSerieNames().includes('tic'), true);
    t.deepEqual(simple.getSerie('tic').data, [60, 63]);
});
