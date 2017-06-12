import {rescaleTime} from './rescaleTime';
import {filter} from './util/filter';
import {serieFromArray} from './serieFromArray';
import {fromJSON} from './from/json';
import {getPeaks} from './util/getPeaks';
import {calculateTic} from './ms/calculateTic';
import {integrate} from './util/integrate';
import {getKovatsRescale} from './getKovatsRescale';
import {getClosestTime} from './util/getClosestTime';
import {applyLockMass} from './ms/applyLockMass';
import {toJSON} from './to/json';
import {getClosestData} from './util/getClosestData';

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
            if (!Array.isArray(times)) {
                throw new TypeError('Times must be an array');
            }
            this.times = times;
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
     * @param {string} name - name of the serie
     * @return {object} - Object with an array of data, dimensions of the elements in the array and name of the serie
     */
    getSerie(name) {
        return this.series[name];
    }

    getSerieNames() {
        return Object.keys(this.series);
    }

    /**
     * Delete a serie
     * @param {string} name - Name of the serie
     */
    deleteSerie(name) {
        if (!this.hasSerie(name)) {
            throw new Error(`The serie "${name}" does not exist`);
        } else {
            delete this.series[name];
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
     * @param {string} name - Name of the serie to add
     * @param {Array} array - Object with an array of data, dimensions of the elements in the array and name of the serie
     * @param {object} [options = {}] - Options object
     * @param {boolean} [options.force = false] - Force replacement of existing serie
     */
    addSerie(name, array, options = {}) {
        if (this.hasSerie(name) && !options.force) {
            throw new Error(`A serie with name "${name}" already exists`);
        }
        if (this.times.length !== array.length) {
            throw new Error('The array size is not the same as the time size');
        }
        this.series[name] = serieFromArray(array);
    }

    /**
     * Returns true if the serie name exists
     * @param {string} name - Name of the serie to check
     * @return {boolean}
     */
    hasSerie(name) {
        return typeof this.series[name] !== 'undefined';
    }

    /**
     * Throws if the serie does not exists
     * @param {string} name - Name of the serie to check
     */
    requiresSerie(name) {
        if (!this.hasSerie(name)) {
            throw new Error(`The serie "${name}" does not exist`);
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
     * @param {function(index, time)} callback
     * @return {Chromatogram}
     */
    filter(callback) {
        filter(this, callback);
        return this;
    }

    /**
     * Apply the GSD peak picking algorithm
     * @param {object} [options] - Options object
     * @param {object} [options.heightFilter = 2] - Filter all objects that are bellow `heightFilter` times the median of the height
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
            this.addSerie('tic', tic);
        }
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
     * Retuns an object with the result of the integrations
     * @param zones : [from, to] or [ [from1, to1], [from2, to2], ...]
     * @param options
     * @return { serieName: [] }
     */
    getIntegrations(zones, options) {
        return integrate(this, zones, options);
    }

    /**
     * Returns information for the closest time
     * @param {number} time - Retention time
     * @return {{index: number, timeBefore: number, timeAfter: number, timeClosest: number, safeIndexBefore: number, safeIndexAfter: number}}
     */
    getClosestTime(time) {
        return getClosestTime(time, this.getTimes());
    }

    /**
     * Return a copy of the chromatogram
     * @return {Chromatogram}
     */
    copy() {
        return fromJSON(this.toJSON);
    }
}

Chromatogram.prototype.applyLockMass = applyLockMass;
Chromatogram.prototype.toJSON = toJSON;
Chromatogram.prototype.getClosestData = getClosestData;

