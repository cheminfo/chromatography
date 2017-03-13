const should = require('should');
const {simpleStringified} = require('../data/_examples.js');
const {fromStringifiedJSON} = require('../..');

test('Create a JSON', async () => {
    let newChromatogram = fromStringifiedJSON(simpleStringified);

    t.is(newChromatogram.getSerie('ms').data.length, 2);
    t.is(newChromatogram.times.length, 2);
    t.deepEqual(newChromatogram.getSerieNames(), ['ms']);
});
