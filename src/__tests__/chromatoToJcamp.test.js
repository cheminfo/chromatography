import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { fromVariables } from 'convert-to-jcamp';
import { test, expect } from 'vitest';

import { fromNetCDF } from '..';

test('chromatoToJcamp', () => {
  const arrayBuffer = readFileSync(
    join(__dirname, '../../testFiles/netcdf/bruker-gcms.cdf'),
  );

  const chromatogram = fromNetCDF(arrayBuffer);
  chromatogram.calculateBpc();
  chromatogram.calculateTic();

  const variablesTIC = {
    x: {
      data: chromatogram.times,
      name: 'Time',
      units: '',
      type: 'INDEPENDENT',
    },
    y: {
      data: chromatogram.getSeries('tic').data,
      name: 'TIC',
      units: '',
    },
  };

  const jcamp = fromVariables(variablesTIC, {
    info: {
      title: 'Total ion chromatogram',
      dataType: 'Chromatogram',
    },
    meta: chromatogram.meta,
  });
  expect(jcamp.split(/\n/)).toHaveLength(4558);
});
