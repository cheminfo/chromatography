import { readFileSync } from 'fs';
import { join } from 'path';

import { fromJcamp } from '../..';

test('deconvolution of overlap signals', () => {
  const path = join(__dirname, '../../../testFiles/jcamp/signalOverlap.jdx');
  const jcamp = readFileSync(path, 'utf8');
  const chromatogram = fromJcamp(jcamp);
  let result = chromatogram.deconvolution([{ from: 8.82, to: 9.2 }], {
    maximumIteration: 100,
    phaseRatio: 0.4,
  });
  expect(result[0].rank).toBe(2);
  expect(result[0].xAxis).toHaveLength(72);
  expect(result[0].times).toHaveLength(88);
  expect(result[0].A.rows).toBe(88);
  expect(result[0].S.rows).toBe(2);
  expect(result[0].S.columns).toBe(72);
});
