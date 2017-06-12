import {integrate} from '../..';
import {chromato} from '../data/examples';

test('Integrate a tic', () => {

    /*
        time: [1, 2, 3, 5, 6],
        tic: [10, 20, 30, 40, 50]
    */

    // var result = integrate(chromato, [1.5, 5.5] );
    // expect(result).toEqual( {"tic": [125] } );

    var result = integrate(chromato, [1.8, 5.5]);
    expect(result).toEqual({tic: [120.05]});

    //
    // var result = integrate(chromato, [2, 5] );
    // expect(result).toEqual( {"tic": [95] } );
    //
    // var result = integrate(chromato, [3, 3] );
    // expect(result).toEqual( {"tic": [0] } );
    //
    // var result = integrate(chromato, [2.5, 2.5] );
    // expect(result).toEqual( {"tic": [0] } );
    //
    // var result = integrate(chromato, [ [2.5, 2.5], [3.5, 3.5] ] );
    // expect(result).toEqual( {"tic": [0,0] } );
    //
    // chromato.addSerie('tac', [100,200,300,400,500]);
    // var result = integrate(chromato, [ [2, 3], [3, 5] ] );
    // expect(result).toEqual( {"tic": [25,70], "tac": [250,700] } );
});

test('Errors', () => {
    expect(() => integrate(chromato, 123)).toThrow('fromTo must be an array of type [from,to]');
});
