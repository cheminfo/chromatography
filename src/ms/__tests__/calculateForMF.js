import { Chromatogram } from '../..';
import { simple } from '../../__tests__/examples';

test('calculateForMF: simple case', () => {
  simple.calculateForMF('C10.C16H7', { ionizations: 'H+,Na+,K+' });
  expect(simple.getSerie('msC10.C16H7-0.5').data).toEqual([20, 0]);
  simple.calculateForMF('C16H7', { error: 1, ionizations: 'H+,Na+,K+' });
  expect(simple.getSerie('msC16H7-1').data).toEqual([20, 21]);
});

test('Errors', () => {
  const chrom = new Chromatogram([1, 2, 3, 5, 6]);
  expect(() => {
    chrom.calculateForMF();
  }).toThrow('calculateForMF: targetMF must be defined and a string');
  expect(() => {
    chrom.calculateForMF('C10');
  }).toThrow('calculateForMF: the mass serie must be defined');
});
