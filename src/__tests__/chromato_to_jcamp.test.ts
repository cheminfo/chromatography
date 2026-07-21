import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import type { MeasurementXYVariables } from 'convert-to-jcamp';
import { fromVariables } from 'convert-to-jcamp';
import { expect, test } from 'vitest';

import { fromNetCDF } from '../index.ts';

test('chromatoToJcamp', () => {
  const arrayBuffer = readFileSync(
    join(import.meta.dirname, '../../testFiles/netcdf/bruker-gcms.cdf'),
  );

  const chromatogram = fromNetCDF(arrayBuffer);
  chromatogram.calculateBpc();
  chromatogram.calculateTic();

  const variablesTIC: MeasurementXYVariables = {
    x: {
      data: chromatogram.times,
      label: 'Time',
      units: '',
      isDependent: false,
    },
    y: {
      data: chromatogram.getSeries1D('tic').getData(),
      label: 'TIC',
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
