import isAnyArray from 'is-any-array';
import { X } from 'ml-spectra-processing';

import { filter } from './util/filter';
import { seriesFromArray } from './seriesFromArray';
import { getPeaks } from './peaks/getPeaks';
import { calculateTic } from './ms/calculateTic';
import { calculateLength } from './ms/calculateLength';
import { calculateBpc } from './ms/calculateBpc';
import { calculateEic } from './ms/calculateEic';
import { calculateForMF } from './ms/calculateForMF';
import { integrate } from './util/integrate';
import { merge } from './ms/merge';
import { applyLockMass } from './ms/applyLockMass';
import { meanFilter } from './filter/meanFilter';
import { percentageFilter } from './filter/percentageFilter';
import { getClosestData } from './util/getClosestData';

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
      seriesName = `ms ${targetMF} ${options.ionizations ||
        'H+'} (${options.slotWidth || 1}, ${options.threshold || 0.05})`,
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
    return X.findClosestIndex(this.getTimes(), time);
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
