import { expect, test } from 'vitest';

import { seriesFromArray } from '../seriesFromArray.js';

test('Errors', () => {
  expect(() => seriesFromArray(1)).toThrow(
    'seriesFromArray requires as parameter an array of numbers or array',
  );
  expect(() => seriesFromArray(['a'])).toThrow(
    'seriesFromArray requires as parameter an array of numbers or array',
  );
});
