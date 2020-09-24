import { readFileSync } from 'fs';
import { join } from 'path';

import { fromJcamp } from '../..';

test('deconvolution of overlap signals', () => {
  const path = join(__dirname, '../../../testFiles/jcamp/signalOverlap.jdx');
  const jcamp = readFileSync(path, 'utf8');
  const chromatogram = fromJcamp(jcamp);
  let result = chromatogram.deconvolution(
    { from: 8.82, to: 9.2 },
    {
      maximumIteration: 100,
      phaseRatio: 0.4,
    },
  );
  expect(result.rank).toBe(2);
  expect(result.xAxis).toHaveLength(72);
  expect(result.times).toHaveLength(88);
  expect(result.A.rows).toBe(88);
  expect(result.S.rows).toBe(2);
  expect(result.S.columns).toBe(72);
});
