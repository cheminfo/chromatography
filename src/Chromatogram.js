'use strict';

const rescaleTime = require('./rescaleTime');

/**
 * Class allowing to store time / ms (ms) series
 * It allows also to store simple time a trace
 * @class Chromatogram
 * @param {object|Array<number>} data - A GC/MS data format object or a time serie
 */
class Chromatogram {
    constructor(data) {
        if (Array.isArray(data)) {
            // init with times
            data = {times: data};
        } else if (typeof data !== 'object') {
            throw new TypeError('data must be an object or array');
        }

        if (!Array.isArray(data.times)) {
            throw new TypeError('times array is mandatory');
        }
        this.times = data.times;
        this.length = data.times.length;

        this.series = [];
        if (data.series) {
            for (const serie of data.series) {
                this.addSerie(serie);
            }
        }
    }

    /**
     * Find the serie giving the name
     * @param {string} name - name of the serie
     * @return {object} - Object with an array of data, dimensions of the elements in the array and name of the serie
     */
    findSerieByName(name) {
        return this.series.find(serie => serie.name === name);
    }

    /**
     * Add a new serie
     * @param {object} serie - Object with an array of data, dimensions of the elements in the array and name of the serie
     */
    addSerie(serie) {
        if (typeof serie.dimension !== 'number') {
            throw new Error('serie must have a dimension');
        }
        if (typeof serie.name !== 'string') {
            throw new Error('serie must have a name');
        }
        if (this.findSerieByName(serie.name)) {
            throw new Error(`a serie with name ${serie.name} already exists`);
        }
        if (!Array.isArray(serie.data)) {
            throw new Error('serie must have a data array');
        }
        this.series.push(serie);
    }

    /**
     * Returns the first time value
     * @return {number} - First time value
     */
    getFirstTime() {
        return this.times[0];
    }

    /**
     * Returns the last time value
     * @return {number} - Last time value
     */
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

module.exports = Chromatogram;
