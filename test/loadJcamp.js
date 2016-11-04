import test from 'ava';
import fs from 'fs';
import Promise from 'bluebird';
import {join} from 'path';
import {fromJcamp} from '..';

const readFileAsync = Promise.promisify(fs.readFile);

test('load JCAMP', async t => {
    const path = join(__dirname, 'data/jcamp/MixC8-C40_140630.JDX');
    const jcamp = await readFileAsync(path, 'utf8');
    const chrom = fromJcamp(jcamp);
    t.is(chrom.length, 6993);
});
