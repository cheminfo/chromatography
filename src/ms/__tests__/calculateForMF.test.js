import { Chromatogram } from '../..';
import { simple } from '../../../testFiles/examples';

describe('calculateForMF', () => {
  it('basic', () => {
    simple.calculateForMF('C8H3', { ionizations: 'H+' });
    expect(simple.getSeries('ms C8H3 H+ (1, 0.05)').data).toStrictEqual([
      10,
      11,
    ]);
  });

  it('check threshold', () => {
    simple.calculateForMF('C8H3', { threshold: 0.9, ionizations: 'H+' });
    expect(simple.getSeries('ms C8H3 H+ (1, 0.9)').data).toStrictEqual([10, 0]);
  });

  it('check many ionizations', () => {
    simple.calculateForMF('C8H4', {
      threshold: 0.9,
      slotWidth: 0.01,
      ionizations: '+,H+',
    });
    expect(simple.getSeries('ms C8H4 +,H+ (0.01, 0.9)').data).toStrictEqual([
      0,
      0,
    ]);
  });

  it('check many ionizations, default slotWidth', () => {
    simple.calculateForMF('C8H4', { threshold: 0.9, ionizations: '+,H+' });
    expect(simple.getSeries('ms C8H4 +,H+ (1, 0.9)').data).toStrictEqual([
      10,
      11,
    ]);
  });

  it('Errors', () => {
    const chromatogram = new Chromatogram([1, 2, 3, 5, 6]);
    expect(() => {
      chromatogram.calculateForMF();
    }).toThrow('calculateForMF: targetMF must be defined and a string');
    expect(() => {
      chromatogram.calculateForMF('C10');
    }).toThrow('calculateForMF: the mass series must be defined');
  });
});
