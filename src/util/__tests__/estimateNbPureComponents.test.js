import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { expect, test } from 'vitest';

import { fromJcamp } from '../../index.js';
import { estimateNbPureComponents } from '../estimateNbPureComponents.js';

test('Estimate number of pure components', () => {
  const path = join(
    import.meta.dirname,
    '../../../testFiles/jcamp/signalOverlap.jdx',
  );
  const jcamp = readFileSync(path, 'utf8');
  const chromatogram = fromJcamp(jcamp);
  let result = estimateNbPureComponents(chromatogram, {
    range: { from: 8.82, to: 9.2 },
  });
  expect(result).toBe(2);
});
