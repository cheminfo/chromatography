import { readFileSync } from 'fs';
import { join } from 'path';

import { fromJcamp } from '../..';
import { estimateNbPureComponents } from '../estimateNbPureComponents';

test('Estimate number of pure components', () => {
  const path = join(__dirname, '../../../testFiles/jcamp/signalOverlap.jdx');
  const jcamp = readFileSync(path, 'utf8');
  const chromatogram = fromJcamp(jcamp);
  let result = estimateNbPureComponents(chromatogram, {
    range: { from: 8.82, to: 9.2 },
  });
  expect(result).toBe(2);
});
