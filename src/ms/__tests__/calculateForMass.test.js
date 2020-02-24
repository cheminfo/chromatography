import { Chromatogram } from '../..';
import { simple } from '../../../testFiles/examples';

test('calculateForMass: simple case', () => {
  simple.calculateForMass(200);
  expect(simple.getSeriesNames()).toContain('ms200±0.5');
  expect(simple.getSeries('ms200±0.5').data).toStrictEqual([20, 0]);
  simple.calculateForMass(200, { slotWidth: 2 });
  expect(simple.getSeriesNames()).toContain('ms200±1');
  expect(simple.getSeries('ms200±1').data).toStrictEqual([20, 21]);
});

test('Errors', () => {
  const chromatogram = new Chromatogram([1, 2, 3, 5, 6]);
  expect(() => {
    chromatogram.calculateForMass();
  }).toThrow('calculateForMass: targetMass must be defined and a number');
  expect(() => {
    chromatogram.calculateForMass(300);
  }).toThrow('calculateForMass: the mass series must be defined');
});
