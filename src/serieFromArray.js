const Serie1D = require('./Serie1D');
const Serie2D = require('./Serie2D');


function serieFromArray(array) {
    // need to check if it is a 1D or 2D array (or 3D ?)
    if (! Array.isArray(array)) {
        throw new TypeError('Serie.fromArray requires as parameter an array of numbers or array');
    }
    // TODO we could really check if all the elements are either number of array and
    // at one specific level of the same kind !

    if (array.length===0 || typeof array[0] === 'number' ) {
        return new Serie1D(array);
    }

    if (! Array.isArray(array[0])) {
        throw new TypeError('Serie.fromArray requires as parameter an array of numbers or array');
    }

    return new Serie2D(array);
};


module.exports = serieFromArray;
