export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
    exports: 'named',
  },
  external: [
    'binary-search',
    'is-any-array',
    'jcampconverter',
    'mf-global',
    'mf-parser',
    'ml-array-max',
    'ml-array-mean',
    'ml-array-sum',
    'ml-gsd',
    'ml-regression-polynomial',
    'ml-spectra-processing',
    'mzdata',
    'netcdf-gcms',
    'xy-parser',
  ],
};
