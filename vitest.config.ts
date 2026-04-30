import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      include: ['src/**/*.js'],
      provider: 'v8',
    },
    setupFiles: ['vitest.setup.ts'],
  },
});
