import isAnyArray from 'is-any-array';
import { ngmca } from 'ml-ngmca';
import { PCA } from 'ml-pca';
import { xFindClosestIndex } from 'ml-spectra-processing';

import { meanFilter } from './filter/meanFilter';
import { percentageFilter } from './filter/percentageFilter';
import { applyLockMass } from './ms/applyLockMass';
import { calculateBpc } from './ms/calculateBpc';
import { calculateEic } from './ms/calculateEic';
import { calculateForMF } from './ms/calculateForMF';
import { calculateLength } from './ms/calculateLength';
import { calculateTic } from './ms/calculateTic';
import { merge } from './ms/merge';
import { getPeaks } from './peaks/getPeaks';
import { seriesFromArray } from './seriesFromArray';
import { filter } from './util/filter';
import { getClosestData } from './util/getClosestData';
import { integrate } from './util/integrate';

export class Chromatogram {
  constructor(times, series) {
    this.series = {};
    this.times = [];
    if (!isAnyArray(times)) {
      throw new TypeError('times must be an array');
    }
    this.times = times;
    if (series) {
      for (const [name, value] of Object.entries(series)) {
        this.addSeries(name, value);
      }
    }
  }

  get length() {
    return this.times.length;
  }

  getSeries(seriesName) {
    this.requiresSeries(seriesName);
    return this.series[seriesName];
  }

  getSeries1D(seriesName) {
    const series = this.getSeries(seriesName);
    if (!series.is1D()) {
      throw new Error(`series ${seriesName} is not a 1D series`);
    }
    return series;
  }

  getSeries2D(seriesName) {
    const series = this.getSeries(seriesName);
    if (!series.is2D()) {
      throw new Error(`series ${seriesName} is not a 2D series`);
    }
    return series;
  }

  getSeriesNames() {
    return Object.keys(this.series);
  }

  hasMass() {
    return this.hasSeries('ms');
  }

  deleteSeries(seriesName) {
    this.requiresSeries(seriesName);
    delete this.series[seriesName];
    return this;
  }

  addSeries(seriesName, array, options = {}) {
    if (this.hasSeries(seriesName) && !options.force) {
      throw new Error(`A series with name "${seriesName}" already exists`);
    }
    if (this.times.length !== array.length) {
      throw new Error(`The series size is not the same as the times size`);
    }
    this.series[seriesName] = seriesFromArray(array);
    this.series[seriesName].name = seriesName;
    return this;
  }

  hasSeries(seriesName) {
    return typeof this.series[seriesName] !== 'undefined';
  }

  requiresSeries(seriesName) {
    if (!this.hasSeries(seriesName)) {
      throw new Error(`The series "${seriesName}" does not exist`);
    }
  }

  get firstTime() {
    return this.times[0];
  }

  get lastTime() {
    return this.times[this.length - 1];
  }

  getTimes() {
    return this.times;
  }

  setTimes(times) {
    if (times.length !== this.times.length) {
      throw new Error('New times must have the same length as the old ones');
    }
    this.times = times;
  }

  rescaleTime(conversionFunction) {
    this.times = this.times.map((time) => conversionFunction(time));
    return this;
  }

  filter(callback, options) {
    return filter(this, callback, options);
  }

  getPeaks(options) {
    return getPeaks(this, options);
  }

  calculateTic(options = {}) {
    if (!this.hasSeries('tic') || options.force) {
      const tic = calculateTic(this);
      this.addSeries('tic', tic, { force: true });
    }

    return this;
  }

  calculateLength(seriesName, options = {}) {
    if (!this.hasSeries('length') || options.force) {
      const length = calculateLength(this, seriesName);
      this.addSeries('length', length, { force: true });
    }
    return this;
  }

  calculateBpc(options = {}) {
    if (!this.hasSeries('bpc') || options.force) {
      const bpc = calculateBpc(this);
      this.addSeries('bpc', bpc, { force: true });
    }
    return this;
  }

  calculateEic(targetMass, options = {}) {
    const {
      seriesName = `ms${targetMass}±${options.slotWidth / 2 || 0.5}`,
      cache = false,
    } = options;
    if (cache && this.hasSeries(seriesName)) return this.getSeries(seriesName);
    const result = calculateEic(this, targetMass, options);
    this.addSeries(seriesName, result, options);
    return this.getSeries(seriesName);
  }

  calculateForMF(targetMF, options = {}) {
    const {
      seriesName = `ms ${targetMF} ${options.ionizations || 'H+'} (${
        options.slotWidth || 1
      }, ${options.threshold || 0.05})`,
      cache = false,
    } = options;
    if (cache && this.hasSeries(seriesName)) return this.getSeries(seriesName);
    const result = calculateForMF(this, targetMF, options);
    this.addSeries(seriesName, result, options);
    return this.getSeries(seriesName);
  }

  integrate(ranges, options) {
    return integrate(this, ranges, options);
  }

  merge(options) {
    return merge(this, options);
  }

  getClosestTime(time) {
    return xFindClosestIndex(this.getTimes(), time);
  }

  getClosestData(time, options = {}) {
    return getClosestData(this, time, options);
  }

  copy() {
    const json = JSON.parse(JSON.stringify(this));
    return fromJSON(json);
  }

  meanFilter(seriesName, options = {}) {
    const { seriesName: newSeriesName = 'msMean' } = options;
    if (this.hasSeries(newSeriesName) && !options.force) {
      throw new Error(`A series with name "${seriesName}" already exists`);
    }
    const newSeries = meanFilter(this, seriesName, options);
    this.series[newSeriesName] = newSeries;
    return newSeries;
  }

  percentageFilter(seriesName, options = {}) {
    const { seriesName: newSeriesName = 'msPercentage' } = options;
    if (this.hasSeries(newSeriesName) && !options.force) {
      throw new Error(`A series with name "${seriesName}" already exists`);
    }
    const newSeries = percentageFilter(this, seriesName, options);
    this.series[newSeriesName] = newSeries;
    return newSeries;
  }

  applyLockMass(mfs, options) {
    return applyLockMass(this, mfs, options);
  }

  getMatrix(range = []) {
    let matrices = [];
    for (let p = 0; p < range.length; p++) {
      let peak = range[p];
      let { from, to } = peak;
      let fromIndex = this.getClosestTime(from);
      let toIndex = this.getClosestTime(to);

      let data = this.series.ms.data.slice(fromIndex, toIndex);
      let times = this.times.slice(fromIndex, toIndex);

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

  estimateNbPureComponents(range = []) {
    let ranks = [];
    for (let p = 0; p < range.length; p++) {
      let matrix;
      let data = range[p];
      if (data.matrix) {
        matrix = data.matrix;
      } else {
        let result = this.getMatrix([data]);
        matrix = result[0].matrix;
      }
      let pca = new PCA(matrix, {
        method: 'NIPALS',
        nCompNIPALS: 10,
        scale: true,
        ignoreZeroVariance: true,
      });
      let s = pca.getExplainedVariance();
      let i = 1;
      let cumulative = s[0];
      for (; i < s.length; i++) {
        cumulative += s[i];
        let value = (cumulative - s[i]) / cumulative;
        if (value > 0.88) {
          break;
        }
      }
      ranks.push(i);
    }
    return ranks;
  }

  deconvolution(range = [], options = {}) {
    let deconvoluted = [];
    for (let p = 0; p < range.length; p++) {
      let data = range[p];
      let { matrix, xAxis, times } = ['matrix', 'xAxis', 'times'].some(
        (e) => !data[e],
      )
        ? this.getMatrix([data])[0]
        : data;
      let rank =
        !data.rank || isNaN(data.rank)
          ? this.estimateNbPureComponents([{ matrix }])[0]
          : data.rank;
      if (rank < 1) {
        new RangeError(
          `Rank should be a positive number for ${data.from} - ${data.to}`,
        );
        continue;
      }

      let result = ngmca(matrix, Number(rank), options);
      let maxByRow = new Float32Array(result.S.rows);
      for (let i = 0; i < result.S.rows; i++) {
        maxByRow[i] = result.S.maxRow(i);
      }

      result.S.scale('row', { scale: Array.from(maxByRow) });
      result.A.scale('column', {
        scale: Array.from(maxByRow).map((e) => 1 / e),
      });

      deconvoluted.push(Object.assign(result, { matrix, times, xAxis, rank }));
    }
    return deconvoluted;
  }

  toJSON() {
    return {
      times: this.times,
      series: this.series,
    };
  }
}

export function fromJSON(json) {
  let series = json.series;
  let times = json.times;
  let chromatogram = new Chromatogram(times);

  if (Array.isArray(series)) {
    for (let i = 0; i < series.length; i++) {
      chromatogram.addSeries(series[i].name, series[i].data);
    }
  } else {
    for (let key of Object.keys(series)) {
      chromatogram.addSeries(key, series[key].data, {
        meta: series[key].meta,
      });
    }
  }
  return chromatogram;
}
