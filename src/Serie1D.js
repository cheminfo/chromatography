'use strict';

const Serie = require('./Serie');

/**
 * Class allowing to manage a Serie
 */
class Serie1D extends Serie {
    constructor(array) {
        super(array, 1);
    }
}

module.exports = Serie1D;
