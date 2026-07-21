import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { expect, test } from 'vitest';

import { fromJcamp } from '../../index.ts';

test('load JCAMP', () => {
  const path = join(
    import.meta.dirname,
    '../../../testFiles/jcamp/MixC8-C40_140630.JDX',
  );
  const jcamp = readFileSync(path, 'utf8');
  const chromatogram = fromJcamp(jcamp);
  expect(chromatogram).toHaveLength(6993);
});
