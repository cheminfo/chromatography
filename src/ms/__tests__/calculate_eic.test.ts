import { expect, test } from 'vitest';

import { simple } from '../../../testFiles/examples.ts';
import { Chromatogram } from '../../index.ts';

test('calculateEic: simple case', () => {
  simple.calculateEic(200);
  expect(simple.getSeriesNames()).toContain('ms200±0.5');
  expect(simple.getSeries('ms200±0.5').getData()).toStrictEqual([20, 0]);
  simple.calculateEic('200,300');
  expect(simple.getSeriesNames()).toContain('ms200,300±0.5');
  expect(simple.getSeries('ms200,300±0.5').getData()).toStrictEqual([50, 0]);
  simple.calculateEic(200, { slotWidth: 2 });
  expect(simple.getSeriesNames()).toContain('ms200±1');
  expect(simple.getSeries('ms200±1').getData()).toStrictEqual([20, 21]);
});

test('Errors', () => {
  const chromatogram = new Chromatogram([1, 2, 3, 5, 6]);
  expect(() => {
    // @ts-expect-error Testing invalid argument.
    chromatogram.calculateEic();
  }).toThrow('targetMass must be defined and a number');
  expect(() => {
    chromatogram.calculateEic(300);
  }).toThrow('The series "ms" does not exist');
});
