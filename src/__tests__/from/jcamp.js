import {readFileSync} from 'fs';
import {join} from 'path';
import {fromJcamp} from '../..';

test('load JCAMP', async () => {
    const path = join(__dirname, '../data/jcamp/MixC8-C40_140630.JDX');
    const jcamp = readFileSync(path, 'utf8');
    const chrom = fromJcamp(jcamp);
    expect(chrom.length).toEqual(6993);
});
