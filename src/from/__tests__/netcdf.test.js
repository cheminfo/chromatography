import { readFileSync } from 'fs';
import { join } from 'path';

import { fromNetCDF } from '../..';

test('load NetCDF', () => {
  const path = join(__dirname, '../../../testFiles/netcdf/bruker-gcms.cdf');
  const netcdf = readFileSync(path);
  const chrom = fromNetCDF(netcdf);
  expect(chrom.getSerieNames()).toStrictEqual(['tic', 'ms']);
  expect(chrom).toHaveLength(4513);
});

test('load agilent HPLC cdf', () => {
  const path = join(__dirname, '../../../testFiles/netcdf/agilent-hplc.cdf');
  const netcdf = readFileSync(path);
  const chrom = fromNetCDF(netcdf);
  expect(chrom.getSerieNames()).toStrictEqual(['uv254']);
  expect(chrom).toHaveLength(4651);
});
