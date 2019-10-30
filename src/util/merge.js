import { asc } from 'num-sort';

import { getClosestTime } from './getClosestTime';

/**
 * Returns a mass spectrum that is the integration of all the spectra in a specific range of time
 * @param {Chromatogram} chromatogram
 * @param {string} name - Name of the serie to integrate
 * @param {Array<Array<number>>} ranges - [[from1, to1], [from2, to2], ...]
 * @param {object} [options = {}] - Options object
 * @param {object} [options.algorithm = 'slot'] - Decision for merging the peaks
 * @param {object} [options.delta = 1] - Parameter for merging the peaks
 * @return {[]}
 */
export function merge(chromatogram, name, ranges, options = {}) {
  const { algorithm = 'slot', delta = 1 } = options;

  if (!Array.isArray(ranges) || !Array.isArray(ranges[0])) {
    throw new Error('ranges must be an array of type [[from,to]]');
  }

  chromatogram.requiresSerie(name);
  let serie = chromatogram.series[name];
  if (serie.dimension !== 2) {
    throw new Error('The serie is not of dimension 2');
  }

  const time = chromatogram.getTimes();
  let results = [];

  for (let fromTo of ranges) {
    let from = fromTo[0];
    let to = fromTo[1];
    let fromIndex = getClosestTime(from, time).safeIndexBefore;
    let toIndex = getClosestTime(to, time).safeIndexAfter;

    results.push({
      serie: _merge(serie, fromIndex, toIndex, delta, algorithm),
      from: {
        time: from,
        index: fromIndex,
      },
      to: {
        time: to,
        index: toIndex,
      },
    });
  }

  return results;
}

export function _merge(serie, fromIndex, toIndex, delta, algorithm) {
  switch (algorithm) {
    case 'slot':
      return slot(fromIndex, toIndex, serie, delta);
    case 'centroid':
      return centroid(fromIndex, toIndex, serie, delta);
    default:
      throw new Error(`Unknown algorithm "${algorithm}"`);
  }
}

function slot(fromIndex, toIndex, serie, slot) {
  let massDictionary = {};

  for (let i = fromIndex; i <= toIndex; i++) {
    for (let j = 0; j < serie.data[i][0].length; j++) {
      // round the mass value
      let x = serie.data[i][0][j];
      let mass = x + slot / 2 - ((x + slot / 2) % slot);

      // add the mass value to the dictionary
      if (massDictionary[mass]) {
        massDictionary[mass] += serie.data[i][1][j];
      } else {
        massDictionary[mass] = serie.data[i][1][j];
      }
    }
  }

  const massList = Object.keys(massDictionary)
    .map((val) => Number(val))
    .sort(asc);
  let integral = [new Array(massList.length), new Array(massList.length)];

  for (let k = 0; k < massList.length; k++) {
    integral[0][k] = Number(massList[k]);
    integral[1][k] = massDictionary[massList[k]];
  }
  return integral;
}

function centroid(fromIndex, toIndex, serie, slot) {
  let integral = [[], []];

  for (let i = fromIndex; i <= toIndex; i++) {
    integral = mergeCentroids(integral, serie.data[i], slot);
  }
  return integral;
}

function mergeCentroids(previous, data, slot) {
  let leftIndex = 0;
  let rightIndex = 0;
  let merged = [[], []];
  let weightedMass = [[], []];
  let size = 0;

  while (leftIndex < previous[0].length && rightIndex < data[0].length) {
    if (previous[0][leftIndex] <= data[0][rightIndex]) {
      // append first(left) to result
      if (size === 0 || previous[0][leftIndex] - merged[0][size - 1] > slot) {
        weightedMass[0].push(previous[0][leftIndex] * previous[1][leftIndex]);
        weightedMass[1].push(previous[1][leftIndex]);
        merged[0].push(previous[0][leftIndex]);
        merged[1].push(previous[1][leftIndex++]);
        size++;
      } else {
        weightedMass[0][size - 1] +=
          previous[0][leftIndex] * previous[1][leftIndex];
        weightedMass[1][size - 1] += previous[1][leftIndex];
        merged[0][size - 1] = previous[0][leftIndex];
        merged[1][size - 1] += previous[1][leftIndex++];
      }
    } else {
      // append first(right) to result
      if (size === 0 || data[0][rightIndex] - merged[0][size - 1] > slot) {
        weightedMass[0].push(data[0][rightIndex] * data[1][rightIndex]);
        weightedMass[1].push(data[1][rightIndex]);
        merged[0].push(data[0][rightIndex]);
        merged[1].push(data[1][rightIndex++]);
        size++;
      } else {
        weightedMass[0][size - 1] += data[0][rightIndex] * data[1][rightIndex];
        weightedMass[1][size - 1] += data[1][rightIndex];
        merged[0][size - 1] = data[0][rightIndex];
        merged[1][size - 1] += data[1][rightIndex++];
      }
    }
  }

  while (leftIndex < previous[0].length) {
    // append first(left) to result
    if (size === 0 || previous[0][leftIndex] - merged[0][size - 1] > slot) {
      weightedMass[0].push(previous[0][leftIndex] * previous[1][leftIndex]);
      weightedMass[1].push(previous[1][leftIndex]);
      merged[0].push(previous[0][leftIndex]);
      merged[1].push(previous[1][leftIndex++]);
      size++;
    } else {
      weightedMass[0][size - 1] +=
        previous[0][leftIndex] * previous[1][leftIndex];
      weightedMass[1][size - 1] += previous[1][leftIndex];
      merged[0][size - 1] = previous[0][leftIndex];
      merged[1][size - 1] += previous[1][leftIndex++];
    }
  }

  while (rightIndex < data[0].length) {
    // append first(right) to result
    if (size === 0 || data[0][rightIndex] - merged[0][size - 1] > slot) {
      weightedMass[0].push(data[0][rightIndex] * data[1][rightIndex]);
      weightedMass[1].push(data[1][rightIndex]);
      merged[0].push(data[0][rightIndex]);
      merged[1].push(data[1][rightIndex++]);
      size++;
    } else {
      weightedMass[0][size - 1] += data[0][rightIndex] * data[1][rightIndex];
      weightedMass[1][size - 1] += data[1][rightIndex];
      merged[0][size - 1] = data[0][rightIndex];
      merged[1][size - 1] += data[1][rightIndex++];
    }
  }

  for (let i = 0; i < merged[0].length; i++) {
    merged[0][i] = weightedMass[0][i] / weightedMass[1][i];
  }

  return merged;
}
