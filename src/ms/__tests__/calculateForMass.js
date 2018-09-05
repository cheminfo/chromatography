import { Chromatogram } from '../..';
import { simple } from '../../__tests__/examples';

test('calculateForMass: simple case', () => {
  simple.calculateForMass(200);
  expect(simple.getSerieNames()).toContain('ms200');
  expect(simple.getSerie('ms200').data).toEqual([20, 0]);
  simple.calculateForMass(200, { error: 1, force: true });
  expect(simple.getSerieNames()).toContain('ms200');
  expect(simple.getSerie('ms200').data).toEqual([20, 21]);
});

test('Errors', () => {
  const chrom = new Chromatogram([1, 2, 3, 5, 6]);
  expect(() => {
    chrom.calculateForMass();
  }).toThrow('calculateForMass: targetMass must be defined and a number');
  expect(() => {
    chrom.calculateForMass(300);
  }).toThrow('calculateForMass: the mass serie must be defined');
});
