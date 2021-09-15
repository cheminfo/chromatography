import { Chromatogram } from '../..';
import { simple } from '../../../testFiles/examples';

describe('calculateForMF', () => {
  it('basic', () => {
    simple.calculateForMF('C8H3', { ionizations: 'H+' });
    expect(simple.getSeries('C8H3(H+)±0.5').data).toStrictEqual([10, 11]);
  });

  it('basic range', () => {
    simple.calculateForMF('(CH)0-5C5', { ionizations: 'H+' });
    expect(simple.getSeries('(CH)0-5C5(H+)±0.5').data).toStrictEqual([10, 11]);
  });

  it('check threshold', () => {
    simple.calculateForMF('C8H3', { threshold: 0.9, ionizations: 'H+' });
    expect(simple.getSeries('C8H3(H+)±0.5(0.9)').data).toStrictEqual([10, 0]);
  });

  it('check many ionizations', () => {
    simple.calculateForMF('C8H4', {
      slotWidth: 0.01,
      ionizations: '+,H+',
    });
    expect(simple.getSeries('C8H4(+,H+)±0.005').data).toStrictEqual([0, 0]);
  });

  it('check many ionizations, default slotWidth', () => {
    simple.calculateForMF('C8H4', { ionizations: '+,H+' });
    expect(simple.getSeries('C8H4(+,H+)±0.5').data).toStrictEqual([10, 11]);
  });

  it('Errors', () => {
    const chromatogram = new Chromatogram([1, 2, 3, 5, 6]);
    expect(() => {
      chromatogram.calculateForMF();
    }).toThrow('targetMF must be defined and a string');
    expect(() => {
      chromatogram.calculateForMF('C10');
    }).toThrow('The series "ms" does not exist');
  });
});
