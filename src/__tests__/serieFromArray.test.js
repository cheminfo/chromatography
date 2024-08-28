import { test, expect } from 'vitest';

import { seriesFromArray } from '../seriesFromArray';

test('Errors', () => {
  expect(() => seriesFromArray(1)).toThrow(
    'seriesFromArray requires as parameter an array of numbers or array',
  );
  expect(() => seriesFromArray(['a'])).toThrow(
    'seriesFromArray requires as parameter an array of numbers or array',
  );
});
