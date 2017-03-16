|
const fs = require('fs');
const Promise = require('bluebird');
const {join} = require('path');
const {fromJcamp} = require('..');

const readFileAsync = Promise.promisify(fs.readFile);

test('load JCAMP', async () => {
    const path = join(__dirname, 'data/jcamp/MixC8-C40_140630.JDX');
    const jcamp = await readFileAsync(path, 'utf8');
    const chrom = fromJcamp(jcamp);
    expect(chrom.length).toEqual(6993);
});
