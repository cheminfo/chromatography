import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { test, expect } from 'vitest';

import { fromJcamp } from '../..';

test('get sub-matrix', () => {
  const path = join(__dirname, '../../../testFiles/jcamp/signalOverlap.jdx');
  const jcamp = readFileSync(path, 'utf8');
  const chromatogram = fromJcamp(jcamp);
  let result = chromatogram.getMzVsTimesMatrix({ from: 8.82, to: 9.2 });
  expect(result.times).toHaveLength(88);
  expect(result.mzAxis).toHaveLength(72);
  expect(result.matrix.columns).toBe(72);
  expect(result.matrix.rows).toBe(88);
});
