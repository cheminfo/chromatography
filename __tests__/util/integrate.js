const fs = require('fs');
const integrate = require('../../src/util/integrate');
const chromato = require('../data/examples').chromato;


test('Integrate a tic', () => {

    /*
        time: [1, 2, 3, 5, 6],
        tic: [10, 20, 30, 40, 50]
    */

    var result = integrate(chromato, [1.5, 5.5] );
    expect(result).toEqual([ { fromIndex: 0, toIndex: 4, from: 1.5, to: 5.5, data: 125 } ]);

    var result = integrate(chromato, [2, 5] );
    expect(result).toEqual([ { fromIndex: 1, toIndex: 3, from: 2, to: 5, data: 95 } ]);

    var result = integrate(chromato, [3, 3] );
    expect(result).toEqual([ { fromIndex: 2, toIndex: 2, from: 3, to: 3, data: 0 } ]);

    var result = integrate(chromato, [2.5, 2.5] );
    expect(result).toEqual([ { fromIndex: 1, toIndex: 2, from: 2.5, to: 2.5, data: 0 } ]);

});

