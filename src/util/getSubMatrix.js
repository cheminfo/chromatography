import { xFindClosestIndex } from 'ml-spectra-processing';

/**
 * Return the submatrix, times, and mass x axis for each range
 * @param {Array<Object>} ranges - List of from - to of the TIC
 * @return {Array<Object>} - List with submatrix, times and mass x axis
 */
export function getSubMatrix(chromatogram, ranges) {
  let matrices = [];
  for (let p = 0; p < ranges.length; p++) {
    let range = ranges[p];
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
    matrices.push({ times, xAxis, matrix });
  }
  return matrices;
}
