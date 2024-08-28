import { test, expect } from 'vitest';

import { Chromatogram } from '../..';
import { simple } from '../../../testFiles/examples';

test('calculateEic: simple case', () => {
  simple.calculateEic(200);
  expect(simple.getSeriesNames()).toContain('ms200±0.5');
  expect(simple.getSeries('ms200±0.5').data).toStrictEqual([20, 0]);
  simple.calculateEic('200,300');
  expect(simple.getSeriesNames()).toContain('ms200,300±0.5');
  expect(simple.getSeries('ms200,300±0.5').data).toStrictEqual([50, 0]);
  simple.calculateEic(200, { slotWidth: 2 });
  expect(simple.getSeriesNames()).toContain('ms200±1');
  expect(simple.getSeries('ms200±1').data).toStrictEqual([20, 21]);
});

test('Errors', () => {
  const chromatogram = new Chromatogram([1, 2, 3, 5, 6]);
  expect(() => {
    chromatogram.calculateEic();
  }).toThrow('targetMass must be defined and a number');
  expect(() => {
    chromatogram.calculateEic(300);
  }).toThrow('The series "ms" does not exist');
});
