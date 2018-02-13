import { readFileSync } from 'fs';
import { join } from 'path';
import { fromJcamp } from '../..';

test('load JCAMP', () => {
  const path = join(__dirname, '../../../testFiles/jcamp/MixC8-C40_140630.JDX');
  const jcamp = readFileSync(path, 'utf8');
  const chrom = fromJcamp(jcamp);
  expect(chrom).toHaveLength(6993);
});
