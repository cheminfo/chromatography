const {simpleStringified} = require('../data/examples.js');
const {fromJSON} = require('../../src/index.js');

test('Parse a JSON', () => {
    let newChromatogram = fromJSON(JSON.parse(simpleStringified));
    expect(newChromatogram.getSerie('ms').data.length).toEqual(2);
    expect(newChromatogram.times.length).toEqual(2);
    expect(newChromatogram.getSerieNames()).toEqual(['ms']);
});