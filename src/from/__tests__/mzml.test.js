import { readFileSync } from 'fs';
import { join } from 'path';

import { fromMzML } from '../..';

describe('mzML data files', () => {
  it('mzData', () => {
    const path = join(__dirname, '../../../testFiles/mzML/test.mzdata.xml');
    const mzData = readFileSync(path);
    const chromatogram = fromMzML(mzData);
    expect(chromatogram).toHaveLength(3029);
  });

  it('Errors', () => {
    const path = join(__dirname, '../../../testFiles/mzML/test.mzdata.xml');
    const mzData = readFileSync(path);
    expect(() => fromMzML(mzData, 'null')).toThrow(
      'Unable to parse from "null" format',
    );
  });
});
