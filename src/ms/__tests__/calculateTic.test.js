import { Chromatogram } from '../..';
import { simple } from '../../../testFiles/examples.js';

test('simple case', () => {
  simple.calculateTic();
  expect(simple.getSerieNames()).toContain('tic');
  expect(simple.getSerie('tic').data).toStrictEqual([60, 63]);
});

test('Errors', () => {
  expect(() => {
    const chromatogram = new Chromatogram([1, 2, 3, 5, 6]);
    chromatogram.calculateTic();
  }).toThrow('The mass serie must be defined');
});
