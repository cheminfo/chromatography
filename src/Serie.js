'use strict';



/**
 * Class allowing to manage a Serie
 */
class Serie {
    constructor(array, dimension) {
        if (new.target === Serie) {
            throw new Exception('You need to create either a 1D or 2D serie');
        }
        this.data=array;
        this.dimension=dimension;
    }
}

module.exports = Serie;
