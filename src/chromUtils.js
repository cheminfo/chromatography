"use strict";
const path = require('path');
const fse = require('fs-extra');

/**
 * Generates a filename based on a timestamp
 * @returns {string}
 */
export function generateFileName() {
    const date = new Date();
    const components = [
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    ];
    const id = components.join('');
    const filePath = './tmp/json';
    const currentFile = path.basename(__filename);
    let output = `${filePath}/${currentFile}_${id}.sliced.json`;
    return output.valueOf();
}

/**
 * Creates directories recursively
 * @param dir
 * @returns {*}
 */
export function makeDir(dir) {
    return fse.mkdirs(dir, (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Directory created successfully');
    });
}

export function isJSON(data) {
    data = typeof data !== 'string' ? JSON.stringify(data) : data;
    try {
        data = JSON.parse(data);
    }
    catch (e) {
        return false;
    }
    return typeof data === 'object' && data !== null;
}

/**
 * Returns a shallow copy of the chromatogram object based on the name property
 * @param obj
 * @param name
 * @returns {*}
 */
export function shallowCopyByName(obj, name) {
    let lowercaseName = name.toLowerCase();
    if (Array.isArray(obj)) {
        obj = { times: obj };
    }
    else if (typeof obj !== 'object') {
        throw new TypeError('data must be an object or array');
    }
    function assertNever(x) {
        x = name;
        throw new Error(`Unexpected series name: '${x}'. Please try with 'tic' or 'ms'`);
    }
    if (!obj.series) {
        throw Error('Series is undefined or do not exist');
    }
    if ((lowercaseName !== 'tic') && (lowercaseName !== 'ms')) {
        assertNever(name);
    }
    return obj.series.find(ser => ser.name === lowercaseName);
}

/**
 * Returns a deep copy of the chromatogram object based on the name property
 * @param obj
 * @param name
 */
export function deepCopySeriesByName(obj, name) {
    return JSON.parse(JSON.stringify(shallowCopyByName(obj, name)));
}

export function getTicData(obj) {
    return (deepCopySeriesByName(obj, 'tic').data).map(function (x) { return x; });
    // return ((deepCopySeriesByName(obj, 'tic')).data);
}

export function getMSData(obj) {
    return (deepCopySeriesByName(obj, 'ms').data).map((x) => {
        return x;
    });
}

/**
 * Returns a sliced copy of the chromatogram object, if no values are indicated will return a normal copy
 * @param obj - chromatogram object
 * @param from
 * @param to
 */
export function sliceJSONChrom(obj, from = 0, to = obj.times.length - 1) {
    let copy = JSON.parse(JSON.stringify(obj));
    const len = copy.times.length;
    const max = len - 1;

    if (typeof from !== 'number' || typeof to !== 'number') {
        throw TypeError(`'from' and 'to' must be numbers`);
    }
    if (!Number.isInteger(from) || !(Number.isInteger(to))) {
        throw TypeError(`'from' and 'to' must be integers`);
    }

    if(from < 0 || to < 0){
        throw Error(`'from' and 'to' must be positive integers`);
    }

    if ( from > max ) {
        throw Error(`'from' is outside the range. 'from' cannot be bigger than ${max}`);
    }

    if(to > max){
        throw Error(`'to' is outside the range`);
    }

    if(!obj.series){
        copy.times = copy.times.slice(from, to + 1);
        return copy;
    }

    copy.times = copy.times.slice(from, to + 1);
    copy.series.forEach(x => {
        x.data = x.data.slice(from, to + 1);
    });
    return copy;
}

/**
 * Writes a JSON file
 * @param obj
 * @param filename
 * @param encoding
 */
export function writeJSONChrom(obj, filename = generateFileName(), encoding = 'utf8') {
    let jsonStr = JSON.stringify(obj);
    fse.outputFile(filename, jsonStr, function (err) {
        console.log(err); // => null
        fse.readFile(filename, encoding, function (err, data) {
            console.log(data);
        });
    });
}

/**
 * Returns a new JSON file with a sliced copy of the chromatogram object
 * @param obj
 * @param filename
 * @param from
 * @param to
 * @param enc
 */
export function sliceAndWriteJSONChrom(obj, filename = generateFileName(), from = 0, to = obj.times.length - 1, enc = 'utf8') {
    const copy = sliceJSONChrom(obj, from, to);
    return writeJSONChrom(copy, filename, enc);
}

export function readJSON(filePath, encoding = 'utf8') {
    fse.readFile(filePath, encoding, (err) => {
        if (err) {
            throw err;
        }
        console.log('reading file');
    });
}
