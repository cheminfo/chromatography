import test from 'ava';
import fs from 'fs';
import Promise from 'bluebird';
import {join} from 'path';
import {Chromatogram} from '..';

const readFileAsync = Promise.promisify(fs.readFile);

test('load JSON', async t => {
    const path = join(__dirname, 'data/json/small.json');
    const data = await readFileAsync(path, 'utf8');
    const chrom = new Chromatogram(JSON.parse(data));
    t.is(chrom.length, 45);
});
