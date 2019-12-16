import isAnyArray from 'is-any-array';

import { Serie1D } from './Serie1D';
import { Serie2D } from './Serie2D';

export function serieFromArray(array) {
  // need to check if it is a 1D or 2D array (or 3D ?)
  if (!isAnyArray(array)) {
    throw new TypeError(
      'Serie.fromArray requires as parameter an array of numbers or array',
    );
  }

  if (array.length === 0 || typeof array[0] === 'number') {
    return new Serie1D(array);
  }

  if (!isAnyArray(array[0])) {
    throw new TypeError(
      'Serie.fromArray requires as parameter an array of numbers or array',
    );
  }

  return new Serie2D(array);
}
