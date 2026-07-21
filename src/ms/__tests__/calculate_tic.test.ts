import { expect, test } from 'vitest';

import { simple } from '../../../testFiles/examples.ts';
import { Chromatogram } from '../../index.ts';

test('simple case', () => {
  simple.calculateTic();
  expect(simple.getSeriesNames()).toContain('tic');
  expect(simple.getSeries('tic').getData()).toStrictEqual([60, 63]);
});

test('Errors', () => {
  expect(() => {
    const chromatogram = new Chromatogram([1, 2, 3, 5, 6]);
    chromatogram.calculateTic();
  }).toThrow('The series "ms" does not exist');
});
