const config = {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
    exports: 'named',
  },
  external: [
    'binary-search',
    'is-any-array',
    'isotopic-distribution',
    'jcampconverter',
    'mf-parser',
    'mf-generator',
    'ml-airpls',
    'ml-gsd',
    'ml-matrix',
    'ml-ngmca',
    'ml-pca',
    'ml-regression-polynomial',
    'ml-spectra-processing/x',
    'ml-spectra-processing/xy',
    'ml-spectra-processing/xyArray',
    'ml-spectra-processing/xyObject',
    'mzdata',
    'netcdf-gcms',
    'xy-parser',
  ],
};

export default config;
