import { sliceJSONChrom,
    shallowCopyByName,
    deepCopySeriesByName,
    getTicData,
    getMSData
} from '../../../src/chromUtils';
import test from 'ava';
import * as fs from 'fs';
import {join} from 'path';
import * as Promise from 'bluebird';


const readFileAsync = Promise.promisify(fs.readFile);

test('load JSON', async t => {
    const path = join(__dirname, 'small.json');
    const data = await readFileAsync(path, 'utf8');
    const copy = sliceJSONChrom(JSON.parse(data));
    t.is(copy.times.length, 45);
});

test('Simple case', t => {
    let data = {
        times: [1, 2, 3],
        series: [
            {
                name: 'ms',
                dimension: 2,
                data: [
                    [
                        [12, 14, 16, 18],
                        [10, 12, 14, 16]
                    ],
                    [
                        [20, 40, 60, 80],
                        [10, 12, 14, 16]
                    ],
                    [
                        [42, 44, 46, 48],
                        [10, 12, 14, 16]
                    ]
                ]
            },
            {
                name: 'tic',
                dimension: 1,
                data: [4, 5, 6]
            }
        ]
    };

    let copy = sliceJSONChrom(data, 0, 1);
    t.is(copy.times.length, 2);
    t.deepEqual(copy.times, [1, 2]);
    t.is((deepCopySeriesByName(copy, 'tic')).data.length, copy.times.length);
    t.is((deepCopySeriesByName(copy, 'ms')).data.length, copy.times.length);
    t.deepEqual((getTicData(copy)), [4, 5]);
    t.deepEqual((deepCopySeriesByName(copy, 'ms')).data,
        [
            [
                [12, 14, 16, 18],
                [10, 12, 14, 16]
            ],
            [
                [20, 40, 60, 80],
                [10, 12, 14, 16]
            ]
        ]
    );
});


test('tinify JSON small.json', async t => {
    const path = join(__dirname, 'small.json');
    const data = await readFileAsync(path, 'utf8');

    const copy = sliceJSONChrom((JSON.parse(data)), 5, 9);

    t.is(copy.times.length, 5);

    t.deepEqual(copy.times, [
        6.879,
        7.152,
        7.425,
        7.698,
        7.971
    ]);
    t.is((shallowCopyByName(copy, 'tic')).data.length, copy.times.length);
    t.is((shallowCopyByName(copy, 'ms')).data.length, copy.times.length);
    t.deepEqual((shallowCopyByName(copy, 'tic')).data, [13948,
        13902,
        14926,
        13601,
        14324]);

    t.deepEqual((shallowCopyByName(copy, 'ms')).data, [
            [
                [
                    206.9,
                    127.8,
                    125.7,
                    85.9,
                    75.8,
                    66.9,
                    45,
                    44,
                    43,
                    40.9,
                    39.8,
                    37.9,
                    37.2,
                    35.9,
                    34.9,
                    31.9,
                    28.9,
                    28,
                    18,
                    17,
                    15.9,
                    14.1
                ],
                [
                    76,
                    31,
                    58,
                    47,
                    269,
                    37,
                    40,
                    953,
                    30,
                    38,
                    63,
                    555,
                    76,
                    1046,
                    202,
                    1170,
                    112,
                    2100,
                    5479,
                    1256,
                    252,
                    58
                ]
            ],
            [
                [
                    125.7,
                    84,
                    75.8,
                    45.9,
                    45,
                    44,
                    41,
                    39.7,
                    37.9,
                    36.9,
                    36,
                    34.9,
                    32,
                    29,
                    28,
                    18,
                    17,
                    16,
                    14.1
                ],
                [
                    47,
                    58,
                    201,
                    38,
                    41,
                    1003,
                    38,
                    51,
                    507,
                    59,
                    1207,
                    254,
                    847,
                    87,
                    1939,
                    5734,
                    1551,
                    192,
                    48
                ]
            ],
            [
                [
                    207.1,
                    84,
                    75.6,
                    45.9,
                    43.9,
                    41,
                    39.7,
                    38,
                    36.9,
                    35.9,
                    35,
                    31.9,
                    28.9,
                    28,
                    18.1,
                    17,
                    16,
                    14.1
                ],
                [
                    47,
                    36,
                    203,
                    49,
                    1057,
                    51,
                    91,
                    568,
                    172,
                    1532,
                    255,
                    1195,
                    46,
                    1760,
                    6007,
                    1597,
                    179,
                    81
                ]
            ],
            [
                [
                    206.9,
                    125.8,
                    75.7,
                    63.8,
                    51.2,
                    44,
                    40.1,
                    39.7,
                    37.9,
                    37,
                    36,
                    34.9,
                    32,
                    28.9,
                    28,
                    18.1,
                    17,
                    15.9
                ],
                [
                    79,
                    85,
                    215,
                    38,
                    82,
                    910,
                    92,
                    56,
                    456,
                    127,
                    1294,
                    337,
                    1155,
                    43,
                    1795,
                    5315,
                    1393,
                    129
                ]
            ],
            [
                [
                    206.9,
                    125.7,
                    76,
                    63.9,
                    55,
                    51.1,
                    49.1,
                    44,
                    40.1,
                    38,
                    37,
                    36,
                    34.9,
                    32,
                    28.9,
                    28,
                    18,
                    17,
                    15.9
                ],
                [
                    110,
                    76,
                    201,
                    40,
                    36,
                    32,
                    63,
                    1156,
                    85,
                    568,
                    82,
                    1581,
                    412,
                    960,
                    38,
                    2014,
                    5540,
                    1199,
                    131
                ]
            ]
        ]
    );


});

test('tinify JSON - sample.json', async t => {
    const path = join(__dirname, 'sample.json');
    const unparsed = await readFileAsync(path, 'utf8');
    const data = JSON.parse(unparsed);

    const copy = sliceJSONChrom(data, 1, 3);
    t.is(copy.times.length, 3);
    t.deepEqual(copy.times, [2, 3, 4]);
    t.is((deepCopySeriesByName(copy, 'tic')).data.length, copy.times.length);
    t.is((deepCopySeriesByName(copy, 'ms')).data.length, copy.times.length);
    t.deepEqual((getTicData(copy)), [20, 30, 40]);
    t.deepEqual((getMSData(copy)),
        [
            [[500, 600], [700, 800]],
            [[900, 1000], [1100, 1200]],
            [[1300, 1400], [1500, 1600]]
        ]
    );
});


