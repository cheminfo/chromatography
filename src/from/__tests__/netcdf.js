import { readFileSync } from 'fs';
import { join } from 'path';

import { fromNetCDF } from '../..';

test('load NetCDF', () => {
  const path = join(__dirname, '../../../testFiles/netcdf/test.cdf');
  const netcdf = readFileSync(path);
  const chrom = fromNetCDF(netcdf);
  expect(chrom).toHaveLength(4513);
});
