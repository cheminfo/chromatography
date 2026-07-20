import { defineConfig, globalIgnores } from 'eslint/config';
import ts from 'eslint-config-cheminfo-typescript/base';

export default defineConfig(
  globalIgnores(['coverage', 'dist', 'lib', 'chromatography.d.ts']),
  ts,
  {
    files: ['examples/*.js'],
    rules: {
      'no-console': 'off',
    },
  },
);
