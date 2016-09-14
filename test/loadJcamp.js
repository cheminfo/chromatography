import test from 'ava';
import {convert} from 'jcampconverter';
import fs from 'fs';
import Promise from 'bluebird';
import {join} from 'path';
import {Chromatogram} from '..';

const readFileAsync = Promise.promisify(fs.readFile);

test('load JCAMP', async t => {
    const path = join(__dirname, 'data/jcamp/MixC8-C40_140630.JDX');
    const jcamp = await readFileAsync(path, 'utf8');
    const data = convert(jcamp, {newGCMS: true}).gcms;
    const chrom = new Chromatogram(data);
    t.is(chrom.length, 6993);
});
