import { xFindClosestIndex } from 'ml-spectra-processing';

/**
 * Return the submatrix, times, and mass x axis for each range
 * @param {Object} range - from - to of the TIC
 * @param {Number} [range.from] - lower limit in the retention time
 * @param {Number} [range.to] - upper limit in the retention time
 * @return {Object} - submatrix, times and m/z axis of the range.
 */
export function getSubMatrix(chromatogram, range) {
  let { from, to } = range;
  let fromIndex = chromatogram.getClosestTime(from);
  let toIndex = chromatogram.getClosestTime(to);

  let data = chromatogram.series.ms.data.slice(fromIndex, toIndex);
  let times = chromatogram.times.slice(fromIndex, toIndex);

  let xAxis = new Set();
  for (let i = 0; i < data.length; i++) {
    let spectrum = data[i];
    for (let j = 0; j < spectrum[0].length; j++) {
      xAxis.add(Math.round(spectrum[0][j]));
    }
  }
  xAxis = Array.from(xAxis).sort((a, b) => a - b);
  const nbPoints = xAxis.length;
  const matrix = new Array(data.length);
  for (let i = 0; i < data.length; i++) {
    let element = data[i];
    let row = new Float32Array(nbPoints);
    for (let j = 0; j < element[0].length; j++) {
      let xValue = Math.round(element[0][j]);
      let yValue = element[1][j];
      let index = xFindClosestIndex(xAxis, xValue);
      row[index] = yValue;
    }
    matrix[i] = Array.from(row);
  }
  return { times, xAxis, matrix };
}
