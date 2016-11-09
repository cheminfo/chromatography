/// <reference types="node" />

'use strict';

import {sliceJSONChrom, writeJSONChrom, sliceAndWriteJSONChrom } from '../../../src/chromUtils'
import * as fs from 'fs';
import test from 'ava';
import {join} from 'path';
import * as Promise from 'bluebird';


const readFileAsync = Promise.promisify(fs.readFile);


const path = join(__dirname, 'small.json');

test('load JSON', async t => {
    const data = await readFileAsync(path, 'utf8');
    const copy = sliceJSONChrom(JSON.parse(data));
    t.is(copy.times.length, 45);


});


test('tinyfy small and write tiny.json', async t => {
    const unparsedSmall = await readFileAsync(path, 'utf8');
    const small = JSON.parse(unparsedSmall);
    const copy = sliceJSONChrom(small, 10, 25);
    const tinyPath = './sliced/tiny.json';

    writeJSONChrom(copy, tinyPath);
    // TODO: test if file exists immediately after writeJSONChrom.
    t.is(copy.times.length, 16);
});


test('tinyfy sample and write sample-tiny.json', async t => {

    // paths
    const samplePath = './sample.json';
    const msPath = './ms.json';
    const ticPath = './tic.json';
    const timesPath = './times.json';
    const output = './sliced/';

    // parsing
    const unparsedSample = await readFileAsync(samplePath, 'utf8');
    const unparsedMS = await readFileAsync(msPath, 'utf8');
    const unparsedTic = await readFileAsync(ticPath, 'utf8');
    const unparsedTimes = await readFileAsync(timesPath, 'utf8');

    const parse = JSON.parse;

    const sample = parse(unparsedSample);
    const ms = parse(unparsedMS);
    const tic = parse(unparsedTic);
    const times = parse(unparsedTimes);


    // slicing and writing
    sliceAndWriteJSONChrom(sample, `${output}sample-tiny.json`, 3, 4, 'utf8');
    sliceAndWriteJSONChrom(ms, `${output}ms-tiny.json`, 0, 2, 'utf8');
    sliceAndWriteJSONChrom(tic, `${output}tic-tiny.json`, 1, 2);
    sliceAndWriteJSONChrom(times, `${output}times-tiny.json`, 6, 9);

    t.is(fs.existsSync(`${output}sample-tiny.json`), true);
    t.is(fs.existsSync(`${output}ms-tiny.json`), true);
    t.is(fs.existsSync(`${output}tic-tiny.json`), true);
    t.is(fs.existsSync(`${output}times-tiny.json`), true);

});

