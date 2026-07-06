import { defineConfig, globalIgnores } from 'eslint/config';
import cheminfo from 'eslint-config-cheminfo/base';

export default defineConfig(globalIgnores(['dist', 'lib']), cheminfo, {
  files: ['examples/*.js'],
  rules: {
    'no-console': 'off',
  },
});
