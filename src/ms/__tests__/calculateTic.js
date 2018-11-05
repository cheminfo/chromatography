import { Chromatogram } from '../..';
import { simple } from '../../../testFiles/examples.js';

test('simple case', () => {
  simple.calculateTic();
  expect(simple.getSerieNames()).toContain('tic');
  expect(simple.getSerie('tic').data).toEqual([60, 63]);
});

test('Errors', () => {
  expect(() => {
    const chrom = new Chromatogram([1, 2, 3, 5, 6]);
    chrom.calculateTic();
  }).toThrow('The mass serie must be defined');
});
