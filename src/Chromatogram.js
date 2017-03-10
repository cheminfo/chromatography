'use strict';

const rescaleTime = require('./rescaleTime');
const Serie1D = require('./Serie1D');
const Serie2D = require('./Serie2D');
const Serie = require('./Serie');

/**
 * Class allowing to store time / ms (ms) series
 * It allows also to store simple time a trace
 * @class Chromatogram
 * @param {object|Array<number>} data - A GC/MS data format object or a time serie
 */
class Chromatogram {
    constructor(times, series) {
        this.series={};
        this.times=[];
        if (! times) {
            return;
        } else {
            if (!Array.isArray(times)) {
                throw new TypeError('imes array is mandatory');
            }
            this.times=times;
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

    /**
     * Delete a serie
     * @param {string} name - Name of the serie
     */
    deleteSerie(name) {
        if (!this.getSerie(name)) {
            throw new Error(`a serie with name ${name} doesn't exists`);
        } else {
            delete this.series[name];
        }
    }

    /**
     * Add a new serie
     * @param {object} series - Object with an array of data, dimensions of the elements in the array and name of the serie
     */
    addSeries(series, options={}) {
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
     * @param {array} array - Object with an array of data, dimensions of the elements in the array and name of the serie
     */
    addSerie(name, array, options={}) {
        if (this.getSerie(name)) {
            throw new Error(`a serie with name ${serie.name} already exists`);
        }
        if (!Array.isArray(serie.data)) {
            throw new Error('serie must have a data array');
        }
        this.series[name] = Serie.fromArray(array);
    }


    /**
     * Returns the first time value
     * @return {number} - First time value
     */
    // TODO this should be converted to a getter so we can use chromatogram.firstTime
    getFirstTime() {
        return this.times[0];
    }

    /**
     * Returns the last time value
     * @return {number} - Last time value
     */
    // TODO this should be converted to a getter so we can use chromatogram.lastTime
    getLastTime() {
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
     */
    rescaleTime(conversionFunction) {
        this.times = rescaleTime(this.times, conversionFunction);
    }
}

Chromatogram.toJSON=require('./to/json');

module.exports = Chromatogram;
