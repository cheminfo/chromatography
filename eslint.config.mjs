import { defineConfig , globalIgnores} from 'eslint/config'
import cheminfo from 'eslint-config-cheminfo/base';

export default defineConfig(
  // globalIgnores([]),
  cheminfo,
);
