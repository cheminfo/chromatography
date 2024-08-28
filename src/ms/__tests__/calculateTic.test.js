import { test, expect } from 'vitest';

import { Chromatogram } from '../..';
import { simple } from '../../../testFiles/examples.js';

test('simple case', () => {
  simple.calculateTic();
  expect(simple.getSeriesNames()).toContain('tic');
  expect(simple.getSeries('tic').data).toStrictEqual([60, 63]);
});

test('Errors', () => {
  expect(() => {
    const chromatogram = new Chromatogram([1, 2, 3, 5, 6]);
    chromatogram.calculateTic();
  }).toThrow('The series "ms" does not exist');
});
