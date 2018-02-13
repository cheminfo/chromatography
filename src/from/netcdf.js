import netcdfJSON from 'netcdf-gcms';

import { fromJSON } from './json';

export function fromNetCDF(netcdf) {
  return fromJSON(netcdfJSON(netcdf));
}
