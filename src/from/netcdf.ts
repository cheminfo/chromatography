import { netcdfGcms } from 'netcdf-gcms';

import type { Chromatogram } from '../chromatogram.ts';
import { fromJSON } from '../chromatogram.ts';

export function fromNetCDF(netcdf: any): Chromatogram {
  return fromJSON(netcdfGcms(netcdf));
}
