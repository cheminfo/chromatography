import isAnyArray from 'is-any-array';
import { X } from 'ml-spectra-processing';

import { getKovatsConversionFunction } from './getKovatsConversionFunction';
import { filter } from './util/filter';
import { seriesFromArray } from './seriesFromArray';
import { getPeaks } from './peaks/getPeaks';
import { calculateTic } from './ms/calculateTic';
import { calculateLength } from './ms/calculateLength';
import { calculateBpc } from './ms/calculateBpc';
import { calculateForMass } from './ms/calculateForMass';
import { calculateForMF } from './ms/calculateForMF';
import { integrate } from './util/integrate';
import { merge } from './ms/merge';
import { applyLockMass } from './ms/applyLockMass';
import { meanFilter } from './filter/meanFilter';
import { percentageFilter } from './filter/percentageFilter';
import { toJSON } from './to/json';
import { getClosestData } from './util/getClosestData';

export class Chromatogram {
  constructor(times, series) {
    this.series = {};
    this.times = [];
    if (times) {
      if (!isAnyArray(times)) {
        throw new TypeError('Times must be an array');
      }
      this.times = times;
    } else {
      throw new Error('The time series is mandatory');
    }
    if (series) {
      for (const [name, value] of Object.entries(series)) {
        this.addSeries(name, value);
      }
    }
  }

  get length() {
    return this.times.length;
  }

  /**
   * Find the series giving the name
   * @param {string} seriesName - name of the serie
   * @return {object} - Object with an array of data, dimensions of the elements in the array and name of the serie
   */
  getSeries(seriesName) {
    return this.series[seriesName];
  }

  getSeriesNames() {
    return Object.keys(this.series);
  }

  hasMass() {
    return this.hasSeries('ms');
  }

  /**
   * Delete a serie
   * @param {string} seriesName - Name of the serie
   */
  deleteSeries(seriesName) {
    if (!this.hasSeries(seriesName)) {
      throw new Error(`The series "${seriesName}" does not exist`);
    } else {
      delete this.series[seriesName];
    }
  }

  /**
   * Add a new serie
   * @param {string} seriesName - Name of the series to add
   * @param {Array} array - Object with an array of data, dimensions of the elements in the array and name of the serie
   * @param {object} [options = {}] - Options object
   * @param {boolean} [options.force = false] - Force replacement of existing serie
   */
  addSeries(seriesName, array, options = {}) {
    if (this.hasSeries(seriesName) && !options.force) {
      throw new Error(`A series with name "${seriesName}" already exists`);
    }
    if (this.times.length !== array.length) {
      throw new Error('The array size is not the same as the time size');
    }
    this.series[seriesName] = seriesFromArray(array);
    this.series[seriesName].name = seriesName;
  }

  /**
   * Returns true if the series name exists
   * @param {string} seriesName - Name of the series to check
   * @return {boolean}
   */
  hasSeries(seriesName) {
    return typeof this.series[seriesName] !== 'undefined';
  }

  /**
   * Throws if the series does not exists
   * @param {string} seriesName - Name of the series to check
   */
  requiresSeries(seriesName) {
    if (!this.hasSeries(seriesName)) {
      throw new Error(`The series "${seriesName}" does not exist`);
    }
  }

  /**
   * Returns the first time value
   * @return {number} - First time value
   */
  get firstTime() {
    return this.times[0];
  }

  /**
   * Returns the last time value
   * @return {number} - Last time value
   */
  get lastTime() {
    return this.times[this.length - 1];
  }

  /**
   * Returns the time values
   * @return {Array<number>} - Time values
   */
  getTimes() {
    return this.times;
  }

  /**
   * Assign the time values
   * @param {Array<number>} times - New time values
   */
  setTimes(times) {
    this.times = times;
  }

  /**
   * Modifies the time applying the conversion function
   * @param {function(number)} conversionFunction
   * @return {Chromatogram}
   */
  rescaleTime(conversionFunction) {
    this.times = this.times.map((time) => conversionFunction(time));
    return this;
  }

  /**
   * Will filter the entries based on the time
   * You can either use the index of the actual time
   * @param {function(number, number)} callback
   * @param {object} [options] - options object
   * @param {boolean} [options.copy = false] - return a copy of the original object
   * @return {Chromatogram}
   */
  filter(callback, options) {
    return filter(this, callback, options);
  }

  /**
   * Apply the GSD peak picking algorithm
   * @param {object} [options] - Options object
   * @param {object} [options.heightFilter = 2] - Filter all objects that are below `heightFilter` times the median of the height
   * @return {Array<object>} - List of GSD objects
   */
  getPeaks(options) {
    return getPeaks(this, options);
  }

  /**
   * Calculate tic
   * @param {object} [options = {}] - Options object
   * @param {boolean} [options.force = false] - Force the calculation it it exists
   */
  calculateTic(options = {}) {
    if (!this.getSeries('tic') || options.force) {
      let tic = calculateTic(this);
      this.addSeries('tic', tic, options);
    }
  }

  /**
   * Calculate length and save it in the 'length' serie
   * @param {string} seriesName - Name of the series to make calculation
   * @param {object} [options = {}] - Options object
   * @param {boolean} [options.force = false] - Force the calculation it it exists
   */
  calculateLength(seriesName, options = {}) {
    if (!this.getSeries('length') || options.force) {
      let length = calculateLength(this, seriesName);
      this.addSeries('length', length, options);
    }
  }

  /**
   * Calculate bpc
   * @param {object} [options = {}] - Options object
   * @param {boolean} [options.force = false] - Force the calculation it it exists
   */
  calculateBpc(options = {}) {
    if (!this.getSeries('bpc') || options.force) {
      let bpc = calculateBpc(this);
      this.addSeries('bpc', bpc, options);
    }
  }

  /**
   * Calculate mass spectrum by filtering for a specific mass
   * @param {number|Array} targetMass - mass for which to extract the spectrum
   * @param {object} [options = {}] - Options object
   * @param {string} [options.seriesName='ms'] - Name of the series to make calculation
   * @param {boolean} [options.cache = false] - Retrieve from cache if exists
   * @param {boolean} [options.force = false] - Force replacement of existing serie
   * @param {number} [options.slotWidth=1] - Width of the slot around the targetMass
   * @return {Series}
   */
  calculateForMass(targetMass, options = {}) {
    const {
      seriesName = `ms${targetMass}±${options.slotWidth / 2 || 0.5}`,
      cache = false,
    } = options;
    if (cache && this.hasSeries(seriesName)) return this.getSeries(seriesName);
    let result = calculateForMass(this, targetMass, options);
    this.addSeries(seriesName, result, options);
    return this.getSeries(seriesName);
  }

  /**
   * Calculate mass spectrum by filtering for a specific mass
   * @param {string} targetMF - mass for which to extract the spectrum
   * @param {object} [options={}]
   * @param {number} [options.slotWidth=1] - With of the slot around the mass of targetMF
   * @param {number} [options.threshold=0.05] - Minimal height for peaks
   * @param {number} [options.ionizations='H+'] - List of allowed ionisation
   * @return {Series} - Calculated mass for targetMass
   */
  calculateForMF(targetMF, options = {}) {
    const {
      seriesName = `ms ${targetMF} ${options.ionizations ||
        'H+'} (${options.slotWidth || 1}, ${options.threshold || 0.05})`,
      cache = false,
    } = options;
    if (cache && this.hasSeries(seriesName)) return this.getSeries(seriesName);
    let result = calculateForMF(this, targetMF, options);
    this.addSeries(seriesName, result, options);
    return this.getSeries(seriesName);
  }

  /**
   * Calculates the conversion function based on peaks that contains kovats
   * @param {array} [peaks]
   * @param {object} [options = {}] - Options object
   * @param {boolean} [options.revert = false] - True for convert from Kovats to time, false otherwise
   * @return {{conversionFunction:function(number),kovatsIndexes:Array<object>,peaks:Array<object>}} - Time and value for the Kovats index
   */
  getKovatsConversionFunction(peaks, options) {
    return getKovatsConversionFunction(peaks, options);
  }

  /**
   * Returns an object with the result of the integrations
   * @param {Array<object>} ranges - [{from:,to:}, {from:, to:}, ...]
   * @param {object} [options = {}] - Options object
   * @param {string} [options.seriesName='tic'] - Name of the chromatogram series, by default 'tic
   * @param {string|boolean} [options.baseline] - Applies baseline correction (trapezoid, min)
   * @return {[]}
   */
  integrate(ranges, options) {
    return integrate(this, ranges, options);
  }

  /**
   * Retuns an object with the result of the merge
   * @param {object} [range={}] - {from:,to:}
   * @param {object} [options = {}] - Options object
   * @param {string} [options.seriesName='ms'] - Name of the mass series, by default 'ms'
   * @param {object} [options.mergeThreshold = 0.3] - Parameter for merging the peaks
   * @param {object} [options.range={from:min,to:max}] - {from:x,to:y} we integrate a zone, by default all
   * @return {[]}
   */
  merge(seriesName, range, options) {
    return merge(this, seriesName, range, options);
  }

  /**
   * Returns information for the closest time
   * @param {number} time - Retention time
   * @return {number} index
   */
  getClosestTime(time) {
    return X.findClosestIndex(this.getTimes(), time);
  }

  getClosestData(time, options = {}) {
    return getClosestData(this, time, options);
  }

  /**
   * Return a copy of the chromatogram
   * @return {Chromatogram}
   */
  copy() {
    const json = JSON.parse(JSON.stringify(this));
    return fromJSON(json);
  }

  /**
   * Filter the given series2D based on it's median value
   * @param {string} seriesName
   * @param {object} [options]
   * @param {string} [options.seriesName = 'msMedian'] - Name of the new serie
   * @param {number} [options.factor = 2] - The values under the median times this factor are removed
   */
  meanFilter(seriesName, options = {}) {
    let series = meanFilter(this, seriesName, options);
    if (options.seriesName) {
      this.series[options.seriesName] = series;
    } else {
      this.series.msMedian = series;
    }
  }

  /**
   * Filter the given series2D based on the percentage of the highest value
   * @param {string} seriesName
   * @param {object} [options]
   * @param {string} [options.seriesName = 'msPercentage'] - Name of the new serie
   * @param {number} [options.percentage = 0.1] - The values under the median times this factor are removed
   */
  percentageFilter(seriesName, options = {}) {
    let series = percentageFilter(this, seriesName, options);
    if (options.seriesName) {
      this.series[options.seriesName] = series;
    } else {
      this.series.msPercentage = series;
    }
  }
}

Chromatogram.prototype.applyLockMass = applyLockMass;
Chromatogram.prototype.toJSON = toJSON;

/**
 * Parse from a JSON element to a new Chromatogram
 * @param {object} json - Result from the toJSON method
 * @return {Chromatogram} - New parsed Chromatogram
 */
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
