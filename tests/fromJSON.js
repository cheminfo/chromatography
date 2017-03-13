const should = require('should');
const fs = require('fs');
const Promise = require('bluebird');
const {join} = require('path');
const {Chromatogram} = require('..');

const readFileAsync = Promise.promisify(fs.readFile);

test('load JSON', async () => {
    const path = join(__dirname, 'data/json/small.json');
    const data = await readFileAsync(path, 'utf8');
    const chromatogram = Chromatogram.fromJSON(JSON.parse(data));
    t.is(chromatogram.length, 45);
});
