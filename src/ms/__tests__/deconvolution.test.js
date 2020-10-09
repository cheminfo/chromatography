import { readFileSync } from 'fs';
import { join } from 'path';

import { fromJcamp } from '../..';

test('deconvolution of overlap signals', () => {
  const path = join(__dirname, '../../../testFiles/jcamp/signalOverlap.jdx');
  const jcamp = readFileSync(path, 'utf8');
  const chromatogram = fromJcamp(jcamp);
  let result = chromatogram.deconvolution({
    range: { from: 8.82, to: 9.2 },
    nmfOptions: {
      maximumIteration: 100,
      phaseRatio: 0.4,
    },
  });
  expect(result.rank).toBe(2);
  expect(result.mzAxis).toHaveLength(72);
  expect(result.times).toHaveLength(88);
  expect(result.profile.rows).toBe(88);
  expect(result.component.rows).toBe(2);
  expect(result.component.columns).toBe(72);
});
