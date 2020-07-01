import { Series } from './Series';
import { updateArrayTypeNode } from 'typescript';

/**
 * Class allowing to manage a 2D Serie
 */
export class Series2D extends Series {
  constructor(array) {
    super(array, 2);
  }
}
