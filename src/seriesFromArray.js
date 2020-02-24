import isAnyArray from 'is-any-array';

import { Series1D } from './Series1D';
import { Series2D } from './Series2D';

export function seriesFromArray(array) {
  // need to check if it is a 1D or 2D array (or 3D ?)
  if (!isAnyArray(array)) {
    throw new TypeError(
      'seriesFromArray requires as parameter an array of numbers or array',
    );
  }

  if (array.length === 0 || typeof array[0] === 'number') {
    return new Series1D(array);
  }

  if (!isAnyArray(array[0])) {
    throw new TypeError(
      'seriesFromArray requires as parameter an array of numbers or array',
    );
  }

  return new Series2D(array);
}
