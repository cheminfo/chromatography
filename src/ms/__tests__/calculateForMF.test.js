import { Chromatogram } from '../..';
import { simple } from '../../../testFiles/examples';

describe('calculateForMF', () => {
  it.only('basic', () => {
    simple.calculateForMF('C8H3', { ionizations: 'H+' });
    expect(simple.getSerie('msC8H3-H+-0.5').data).toStrictEqual([10, 0]);
  });

  it('many parts', () => {
    simple.calculateForMF('C10.C16H7', { ionizations: 'H+,Na+,K+' });
    expect(simple.getSerie('msC10.C16H7-H+,Na+,K+-0.5').data).toStrictEqual([
      20,
      0,
    ]);
    simple.calculateForMF('C16H7', { error: 1, ionizations: 'H+,Na+,K+' });
    expect(simple.getSerie('msC16H7-H+,Na+,K+-1').data).toStrictEqual([20, 21]);
  });

  it('Errors', () => {
    const chrom = new Chromatogram([1, 2, 3, 5, 6]);
    expect(() => {
      chrom.calculateForMF();
    }).toThrow('calculateForMF: targetMF must be defined and a string');
    expect(() => {
      chrom.calculateForMF('C10');
    }).toThrow('calculateForMF: the mass serie must be defined');
  });
});
