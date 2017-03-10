'use strict';

const Serie = require('./Serie');

/**
 * Class allowing to manage a 2D Serie
 */
class Serie2D extends Serie {
    constructor(array) {
        super(array, 2);
    }
}

module.exports = Serie2D;
