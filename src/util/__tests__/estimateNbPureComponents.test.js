import { readFileSync } from 'fs';
import { join } from 'path';

import { fromJcamp } from '../..';

test('Estimate number of pure components', () => {
  const path = join(__dirname, '../../../testFiles/jcamp/signalOverlap.jdx');
  const jcamp = readFileSync(path, 'utf8');
  const chromatogram = fromJcamp(jcamp);
  let result = chromatogram.estimateNbPureComponents([{ from: 8.82, to: 9.2 }]);
  expect(result[0]).toBe(2);
});
