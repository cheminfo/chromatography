import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { describe, it, expect } from 'vitest';

import { fromXML } from '../..';

describe('mzML data files', () => {
  it('mzData', () => {
    const path = join(__dirname, '../../../testFiles/mzML/test.mzdata.xml');
    const mzData = readFileSync(path);
    const chromatogram = fromXML(mzData);
    expect(chromatogram).toHaveLength(3029);
  });
});
