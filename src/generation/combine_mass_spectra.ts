import type { DataXY, DoubleArray } from 'cheminfo-types';

/**
 * Combine two mass spectra into a new one, adding the values for identical masses.
 * @param ms1 - First MS.
 * @param ms2 - Second MS.
 * @returns Combined MS.
 */
export function combineMassSpectra(
  ms1: DataXY<DoubleArray>,
  ms2: DataXY<DoubleArray>,
): DataXY<DoubleArray> {
  const x: number[] = [];
  const y: number[] = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < ms1.x.length && index2 < ms2.x.length) {
    const mass1 = ms1.x[index1];
    const mass2 = ms2.x[index2];

    if (mass1 < mass2) {
      x.push(mass1);
      y.push(ms1.y[index1]);
      index1++;
    } else if (mass2 < mass1) {
      x.push(mass2);
      y.push(ms2.y[index2]);
      index2++;
    } else {
      x.push(mass1);
      y.push(ms1.y[index1] + ms2.y[index2]);
      index1++;
      index2++;
    }
  }

  while (index1 < ms1.x.length) {
    x.push(ms1.x[index1]);
    y.push(ms1.y[index1]);
    index1++;
  }

  while (index2 < ms2.x.length) {
    x.push(ms2.x[index2]);
    y.push(ms2.y[index2]);
    index2++;
  }

  return { x, y };
}
