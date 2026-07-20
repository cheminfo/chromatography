import { netcdfGcms } from 'netcdf-gcms';

import { fromJSON } from '../Chromatogram.js';

export function fromNetCDF(netcdf) {
  return fromJSON(netcdfGcms(netcdf));
}
