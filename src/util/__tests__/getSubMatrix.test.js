import { readFileSync } from 'fs';
import { join } from 'path';

import { fromJcamp } from '../..';

test('get sub-matrix', () => {
  const path = join(__dirname, '../../../testFiles/jcamp/signalOverlap.jdx');
  const jcamp = readFileSync(path, 'utf8');
  const chromatogram = fromJcamp(jcamp);
  let result = chromatogram.getMatrix([{ from: 8.82, to: 9.2 }]);
  expect(result[0].times).toHaveLength(88);
  expect(result[0].xAxis).toHaveLength(72);
  expect(result[0].matrix[0]).toHaveLength(72);
  expect(result[0].matrix).toHaveLength(88);
});
