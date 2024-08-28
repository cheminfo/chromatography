import { Matrix } from 'ml-matrix';
import { xFindClosestIndex } from 'ml-spectra-processing';

/**
 * Return the submatrix, times, and mass x axis for each range
 * @param chromatogram
 * @param {object} range - from - to of the TIC
 * @param {number} [range.from] - lower limit in the retention time
 * @param {number} [range.to] - upper limit in the retention time
 * @returns {object} - submatrix, times and m/z axis of the range.
 */
export function getMzVsTimesMatrix(chromatogram, range) {
  let { from, to } = range;
  let fromIndex = chromatogram.getClosestTime(from);
  let toIndex = chromatogram.getClosestTime(to);

  let data = chromatogram.series.ms.data.slice(fromIndex, toIndex);
  let times = chromatogram.times.slice(fromIndex, toIndex);

  let mzAxis = new Set();
  for (let i = 0; i < data.length; i++) {
    let spectrum = data[i];
    for (let j = 0; j < spectrum[0].length; j++) {
      mzAxis.add(Math.round(spectrum[0][j]));
    }
  }
  mzAxis = Array.from(mzAxis).sort((a, b) => a - b);
  const nbPoints = mzAxis.length;
  const matrix = new Matrix(data.length, nbPoints);
  for (let i = 0; i < data.length; i++) {
    let element = data[i];
    for (let j = 0; j < element[0].length; j++) {
      let xValue = Math.round(element[0][j]);
      let index = xFindClosestIndex(mzAxis, xValue);
      matrix.set(i, index, element[1][j]);
    }
  }
  return { times, mzAxis, matrix };
}
