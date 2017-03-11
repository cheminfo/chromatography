import {Chromatogram} from '../..';

let simple = new Chromatogram(
    [1, 2],
    {
        ms: [
            [[100, 200, 300], [10, 20, 30]],
            [[101, 201, 301], [11, 21, 31]],
        ]
    }
);

let simpleStringified = '{"times":[1,2],"series":{"ms":{"data":[[[100,200,300],[10,20,30]],[[101,201,301],[11,21,31]]],"meta":{}}}}';

let simple4 = new Chromatogram(
    [1, 2, 3, 4],
    {
        ms: [
            [[101, 201, 301], [11, 21, 31]],
            [[102, 202, 302], [12, 22, 32]],
            [[103, 203, 303], [13, 23, 33]],
            [[104, 204, 304], [14, 24, 34]],
        ]
    }
);


module.exports = {
    simple,
    simpleStringified,
    simple4
};
