'use strict';

module.exports = class Chromatogram {
    constructor(data, options) {
        if (Array.isArray(data)) { // init with times
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

    findSerieByName(name) {
        return this.series.find(serie => serie.name === name);
    }

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

    getFirstTime() {
        return this.times[0];
    }

    getLastTime() {
        return this.times[this.length - 1];
    }

    getTimes() {
        return this.times;
    }
};
