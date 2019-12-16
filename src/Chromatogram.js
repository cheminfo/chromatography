import isAnyArray from 'is-any-array';
import { X } from 'ml-spectra-processing';

import { rescaleTime } from './rescaleTime';
import { filter } from './util/filter';
import { serieFromArray } from './serieFromArray';
import { fromJSON } from './from/json';
import { getPeaks } from './util/getPeaks';
import { calculateTic } from './ms/calculateTic';
import { calculateLength } from './ms/calculateLength';
import { calculateBpc } from './ms/calculateBpc';
import { calculateForMass } from './ms/calculateForMass';
import { calculateForMF } from './ms/calculateForMF';
import { integrate } from './util/integrate';
import { merge } from './ms/merge';
import { getKovatsRescale } from './getKovatsRescale';
import { applyLockMass } from './ms/applyLockMass';
import { meanFilter } from './filter/meanFilter';
import { percentageFilter } from './filter/percentageFilter';
import { toJSON } from './to/json';
import { getClosestData } from './util/getClosestData';
/**
 * Class allowing to store time / ms (ms) series
 * It allows also to store simple time a trace
 * @class Chromatogram
 * @param {Array<number>} times - Time serie
 * @param {object} series - A map of series with name and the Serie object
 */
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
      throw new Error('The time serie is mandatory');
    }
    if (series) {
      this.addSeries(series);
    }
  }

  get length() {
    return this.times.length;
  }

  /**
   * Find the serie giving the name
   * @param {string} serieName - name of the serie
   * @return {object} - Object with an array of data, dimensions of the elements in the array and name of the serie
   */
  getSerie(serieName) {
    return this.series[serieName];
  }

  getSerieNames() {
    return Object.keys(this.series);
  }

  hasMass() {
    return this.hasSerie('ms');
  }

  /**
   * Delete a serie
   * @param {string} serieName - Name of the serie
   */
  deleteSerie(serieName) {
    if (!this.hasSerie(serieName)) {
      throw new Error(`The serie "${serieName}" does not exist`);
    } else {
      delete this.series[serieName];
    }
  }

  /**
   * Add new series
   * @param {object} series - Object with an array of data, dimensions of the elements in the array and name of the serie
   * @param {object} [options = {}] - Object with an array of data, dimensions of the elements in the array and name of the serie
   */
  addSeries(series, options = {}) {
    if (typeof series !== 'object' || Array.isArray(series)) {
      throw new TypeError('data must be an object containing arrays of series');
    }
    for (const key of Object.keys(series)) {
      this.addSerie(key, series[key], options);
    }
  }

  /**
   * Add a new serie
   * @param {string} serieName - Name of the serie to add
   * @param {Array} array - Object with an array of data, dimensions of the elements in the array and name of the serie
   * @param {object} [options = {}] - Options object
   * @param {boolean} [options.force = false] - Force replacement of existing serie
   */
  addSerie(serieName, array, options = {}) {
    if (this.hasSerie(serieName) && !options.force) {
      throw new Error(`A serie with name "${serieName}" already exists`);
    }
    if (this.times.length !== array.length) {
      throw new Error('The array size is not the same as the time size');
    }
    this.series[serieName] = serieFromArray(array);
    this.series[serieName].name = serieName;
  }

  /**
   * Returns true if the serie name exists
   * @param {string} serieName - Name of the serie to check
   * @return {boolean}
   */
  hasSerie(serieName) {
    return typeof this.series[serieName] !== 'undefined';
  }

  /**
   * Throws if the serie does not exists
   * @param {string} serieName - Name of the serie to check
   */
  requiresSerie(serieName) {
    if (!this.hasSerie(serieName)) {
      throw new Error(`The serie "${serieName}" does not exist`);
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
    this.times = rescaleTime(this.times, conversionFunction);
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
    if (!this.getSerie('tic') || options.force) {
      let tic = calculateTic(this);
      this.addSerie('tic', tic, options);
    }
  }

  /**
   * Calculate length and save it in the 'length' serie
   * @param {string} serieName - Name of the serie to make calculation
   * @param {object} [options = {}] - Options object
   * @param {boolean} [options.force = false] - Force the calculation it it exists
   */
  calculateLength(serieName, options = {}) {
    if (!this.getSerie('length') || options.force) {
      let length = calculateLength(this, serieName);
      this.addSerie('length', length, options);
    }
  }

  /**
   * Calculate bpc
   * @param {object} [options = {}] - Options object
   * @param {boolean} [options.force = false] - Force the calculation it it exists
   */
  calculateBpc(options = {}) {
    if (!this.getSerie('bpc') || options.force) {
      let bpc = calculateBpc(this);
      this.addSerie('bpc', bpc, options);
    }
  }

  /**
   * Calculate mass spectrum by filtering for a specific mass
   * @param {number|Array} targetMass - mass for which to extract the spectrum
   * @param {object} [options = {}] - Options object
   * @param {string} [options.serieName='ms'] - Name of the serie to make calculation
   * @param {boolean} [options.cache = false] - Retrieve from cache if exists
   * @param {boolean} [options.force = false] - Force replacement of existing serie
   * @param {number} [options.slotWidth=1] - Width of the slot around the targetMass
   * @return {Serie}
   */
  calculateForMass(targetMass, options = {}) {
    const {
      serieName = `ms${targetMass}±${options.slotWidth / 2 || 0.5}`,
      cache = false,
    } = options;
    if (cache && this.hasSerie(serieName)) return this.getSerie(serieName);
    let result = calculateForMass(this, targetMass, options);
    this.addSerie(serieName, result, options);
    return this.getSerie(serieName);
  }

  /**
   * Calculate mass spectrum by filtering for a specific mass
   * @param {string} targetMF - mass for which to extract the spectrum
   * @param {object} [options={}]
   * @param {number} [options.slotWidth=1] - With of the slot around the mass of targetMF
   * @param {number} [options.threshold=0.05] - Minimal height for peaks
   * @param {number} [options.ionizations='H+'] - List of allowed ionisation
   * @return {Serie} - Calculated mass for targetMass
   */
  calculateForMF(targetMF, options = {}) {
    const {
      serieName = `ms ${targetMF} ${options.ionizations ||
        'H+'} (${options.slotWidth || 1}, ${options.threshold || 0.05})`,
      cache = false,
    } = options;
    if (cache && this.hasSerie(serieName)) return this.getSerie(serieName);
    let result = calculateForMF(this, targetMF, options);
    this.addSerie(serieName, result, options);
    return this.getSerie(serieName);
  }

  /**
   * Calculates the table of Kovats indexes for the reference spectra
   * @param {object} [options = {}] - Options object
   * @param {number} [options.heightFilter = 100] - Filter all objects that are below heightFilter times the median of the height
   * @param {number} [options.thresholdFactor = 0.005] - Every peak that is below the main peak times this factor will be removed (when is 0 there's no filter)
   * @param {number} [options.maxNumberPeaks = 40] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
   * @param {number} [options.groupWidth = 5] - When find a max can't be another max in a radius of this size
   * @param {boolean} [options.revert = false] - True for convert from Kovats to time, false otherwise
   * @return {{conversionFunction:function(number),kovatsIndexes:Array<object>,peaks:Array<object>}} - Time and value for the Kovats index
   */
  getKovatsRescale(options) {
    return getKovatsRescale(this, options);
  }

  /**
   * Returns an object with the result of the integrations
   * @param {string} serieName - Name of the serie to integrate
   * @param {Array<object>} ranges - [[from1, to1], [from2, to2], ...]
   * @param {object} [options = {}] - Options object
   * @param {string|boolean} [options.baseline] - Applies baseline correction
   * @return {[]}
   */
  integrate(serieName, ranges, options) {
    return integrate(this, serieName, ranges, options);
  }

  /**
   * Retuns an object with the result of the merge
   * @param {string} serieName - Name of the serie to merge
   * @param {Array<object>} ranges - [{from:,to:}, {from:, to:}, ...]
   * @param {object} [options = {}] - Options object
   * @param {object} [options.delta = 1] - Parameter for merging the peaks
   * @return {[]}
   */
  merge(serieName, ranges, options) {
    return merge(this, serieName, ranges, options);
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
   * Filter the given serie2D based on it's median value
   * @param {string} serieName
   * @param {object} [options]
   * @param {string} [options.serieName = 'msMedian'] - Name of the new serie
   * @param {number} [options.factor = 2] - The values under the median times this factor are removed
   */
  meanFilter(serieName, options = {}) {
    let serie = meanFilter(this, serieName, options);
    if (options.serieName) {
      this.series[options.serieName] = serie;
    } else {
      this.series.msMedian = serie;
    }
  }

  /**
   * Filter the given serie2D based on the percentage of the highest value
   * @param {string} serieName
   * @param {object} [options]
   * @param {string} [options.serieName = 'msPercentage'] - Name of the new serie
   * @param {number} [options.percentage = 0.1] - The values under the median times this factor are removed
   */
  percentageFilter(serieName, options = {}) {
    let serie = percentageFilter(this, serieName, options);
    if (options.serieName) {
      this.series[options.serieName] = serie;
    } else {
      this.series.msPercentage = serie;
    }
  }
}

Chromatogram.prototype.applyLockMass = applyLockMass;
Chromatogram.prototype.toJSON = toJSON;
