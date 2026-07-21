import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { expect, test } from 'vitest';

import { fromJcamp } from '../../index.ts';
import { estimateNbPureComponents } from '../estimate_nb_pure_components.ts';

test('Estimate number of pure components', () => {
  const path = join(
    import.meta.dirname,
    '../../../testFiles/jcamp/signalOverlap.jdx',
  );
  const jcamp = readFileSync(path, 'utf8');
  const chromatogram = fromJcamp(jcamp);
  const result = estimateNbPureComponents(chromatogram, {
    range: { from: 8.82, to: 9.2 },
  });
  expect(result).toBe(2);
});
