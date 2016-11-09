'use strict';

import {sliceJSONChrom, getTicData, getMSData} from '../../../src/chromUtils'
import * as fs from 'fs';
import {join} from 'path';
import * as Promise from 'bluebird';
import test from 'ava';

const readFileAsync = Promise.promisify(fs.readFile);

const tinyPath = join(__dirname, 'sliced/tiny.json');

test('load tiny.json', async t => {
    const tinyData = await readFileAsync(tinyPath, 'utf8');
    const tiny = JSON.parse(tinyData);
    t.is(tiny.times.length, 16);
    console.log(getTicData(tiny));

    t.deepEqual(tiny.times, [
            8.244,
            8.517,
            8.79,
            9.063,
            9.336,
            9.608,
            9.881,
            10.154,
            10.427,
            10.7,
            10.973,
            11.246,
            11.519,
            11.792,
            12.065,
            12.338
        ]
    );

    t.deepEqual(getTicData(tiny),
        [
            14330,
            13617,
            13822,
            14422,
            13595,
            13534,
            13967,
            13965,
            14192,
            13630,
            14771,
            13689,
            14289,
            14411,
            14400,
            15099
        ]);
});

test('slice tiny', async t => {
    const tinyData = await readFileAsync(tinyPath, 'utf8');
    const parsed = JSON.parse(tinyData);
    const data = sliceJSONChrom(parsed,10,13);

    t.is(data.series.length, 2);
    t.deepEqual(getMSData(data),
        [
            [
                [
                    125.9,
                    85.6,
                    83.8,
                    77.7,
                    75.7,
                    63.9,
                    56,
                    48.7,
                    43.9,
                    39.9,
                    38.7,
                    37.9,
                    36.9,
                    36,
                    34.9,
                    32,
                    28,
                    18,
                    17,
                    16,
                    11.8
                ],
                [
                    74,
                    30,
                    89,
                    55,
                    288,
                    30,
                    49,
                    63,
                    1036,
                    156,
                    53,
                    548,
                    111,
                    1286,
                    297,
                    1242,
                    1901,
                    6340,
                    987,
                    106,
                    30
                ]
            ],
            [
                [
                    85.8,
                    84,
                    77.7,
                    75.8,
                    55.9,
                    44,
                    39.9,
                    38,
                    37,
                    36,
                    34.9,
                    32,
                    28,
                    18.1,
                    17,
                    16,
                    14.1
                ],
                [
                    56,
                    106,
                    41,
                    205,
                    95,
                    1334,
                    90,
                    418,
                    78,
                    1282,
                    259,
                    939,
                    1492,
                    5676,
                    1381,
                    200,
                    37
                ]
            ],
            [
                [
                    206.7,
                    125.6,
                    85.8,
                    75.8,
                    44.9,
                    44,
                    40,
                    38,
                    36,
                    35,
                    32,
                    31,
                    28.9,
                    28.1,
                    18,
                    17,
                    15.9,
                    14.1
                ],
                [
                    79,
                    38,
                    39,
                    201,
                    61,
                    1075,
                    124,
                    446,
                    1202,
                    352,
                    1197,
                    54,
                    46,
                    1748,
                    6033,
                    1370,
                    183,
                    41
                ]
            ],
            [
                [
                    206.7,
                    125.6,
                    85.8,
                    75.9,
                    48.8,
                    44.9,
                    44,
                    41,
                    39.9,
                    38,
                    36.9,
                    36,
                    34.9,
                    32,
                    31.1,
                    28.9,
                    28,
                    18,
                    17,
                    16
                ],
                [
                    38,
                    63,
                    31,
                    222,
                    74,
                    39,
                    825,
                    59,
                    99,
                    447,
                    122,
                    1482,
                    293,
                    1099,
                    42,
                    52,
                    1962,
                    5759,
                    1484,
                    219
                ]
            ]

        ]
    );
});