import { netcdfGcms } from 'netcdf-gcms';

import { fromJSON } from '../Chromatogram';

export function fromNetCDF(netcdf) {
  return fromJSON(netcdfGcms(netcdf));
}
