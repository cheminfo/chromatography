import { expect, test } from 'vitest';

import { seriesFromArray } from '../series_from_array.ts';

test('Errors', () => {
  // @ts-expect-error Testing wrong data
  expect(() => seriesFromArray(1)).toThrow(
    'seriesFromArray requires as parameter an array of numbers or array',
  );
  expect(() => seriesFromArray(['a'])).toThrow(
    'seriesFromArray requires as parameter an array of numbers or array',
  );
});
