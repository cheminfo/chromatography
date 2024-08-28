import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { test, expect } from 'vitest';

import { fromNetCDF } from '../..';

test('load NetCDF', () => {
  const path = join(__dirname, '../../../testFiles/netcdf/bruker-gcms.cdf');
  const netcdf = readFileSync(path);
  const chromatogram = fromNetCDF(netcdf);
  expect(chromatogram.getSeriesNames()).toStrictEqual(['tic', 'ms']);
  expect(chromatogram).toHaveLength(4513);
});

test('load agilent HPLC cdf', () => {
  const path = join(__dirname, '../../../testFiles/netcdf/agilent-hplc.cdf');
  const netcdf = readFileSync(path);
  const chromatogram = fromNetCDF(netcdf);
  expect(chromatogram.getSeriesNames()).toStrictEqual(['uv254']);
  expect(chromatogram).toHaveLength(4651);
});
