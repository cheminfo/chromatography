import { simple4 } from '../../../testFiles/examples';

let chromatogram;

describe('filter', () => {
  beforeEach(() => {
    chromatogram = simple4.copy();
    jest.resetModules();
  });

  it('Keep the odd', () => {
    chromatogram.filter((index) => index % 2);
    expect(chromatogram.getTimes()).toHaveLength(2);
    expect(chromatogram.getSerie('ms').data).toHaveLength(2);
    expect(chromatogram.getTimes()).toStrictEqual([2, 4]);
    expect(chromatogram.getSerie('ms').data).toStrictEqual([
      [[102, 202, 302], [12, 22, 32]],
      [[104, 204, 304], [14, 24, 34]]
    ]);
  });

  it('Keep time under a value', () => {
    chromatogram.filter((index, time) => time < 3);
    expect(chromatogram.getTimes()).toHaveLength(2);
    expect(chromatogram.getSerie('ms').data).toHaveLength(2);
    expect(chromatogram.getTimes()).toStrictEqual([1, 2]);
    expect(chromatogram.getSerie('ms').data).toStrictEqual([
      [[101, 201, 301], [11, 21, 31]],
      [[102, 202, 302], [12, 22, 32]]
    ]);
  });

  it('Copied object', () => {
    expect(chromatogram.getTimes()).toHaveLength(4);
    let copy = chromatogram.filter((index) => index % 2, { copy: true });
    expect(chromatogram.getTimes()).toHaveLength(4);
    expect(copy.getTimes()).toHaveLength(2);
  });
});

