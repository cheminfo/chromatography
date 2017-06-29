import {fromJSON} from './json';
import netcdfJSON from 'netcdf-gcms';

export function fromNetCDF(netcdf) {
    return fromJSON(netcdfJSON(netcdf));
}
