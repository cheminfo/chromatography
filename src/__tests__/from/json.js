import {simpleStringified} from '../data/examples.js';
import {fromJSON} from '../..';

test('Parse a JSON', () => {
    let newChromatogram = fromJSON(JSON.parse(simpleStringified));
    expect(newChromatogram.getSerie('ms').data.length).toEqual(2);
    expect(newChromatogram.times.length).toEqual(2);
    expect(newChromatogram.getSerieNames()).toEqual(['ms']);
});

test('Serie as an array', () => {
    let series = [
        {name: 'ms', data: [[1, 1], [2, 2]]},
        {name: 'tic', data: [2, 4]},
    ];
    let newChromatogram = fromJSON({times: [0, 1], series});
    expect(newChromatogram.getSerie('ms').data.length).toEqual(2);
    expect(newChromatogram.times.length).toEqual(2);
    expect(newChromatogram.getSerieNames()).toEqual(['ms', 'tic']);
});
