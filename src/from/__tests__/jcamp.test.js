import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { test, expect } from 'vitest';

import { fromJcamp } from '../..';

test('load JCAMP', () => {
  const path = join(__dirname, '../../../testFiles/jcamp/MixC8-C40_140630.JDX');
  const jcamp = readFileSync(path, 'utf8');
  const chromatogram = fromJcamp(jcamp);
  expect(chromatogram).toHaveLength(6993);
});
