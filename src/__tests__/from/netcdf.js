import {readFileSync} from 'fs';
import {join} from 'path';
import {fromNetCDF} from '../..';

test('load JCAMP', () => {
    const path = join(__dirname, '../data/netcdf/test.cdf');
    const netcdf = readFileSync(path);
    const chrom = fromNetCDF(netcdf);
    expect(chrom.length).toEqual(4513);
});
