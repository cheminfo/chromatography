import {simpleStringified} from '../data/examples.js';
import {fromJSON} from '../..';

test('Parse a JSON', () => {
    let newChromatogram = fromJSON(JSON.parse(simpleStringified));
    expect(newChromatogram.getSerie('ms').data.length).toEqual(2);
    expect(newChromatogram.times.length).toEqual(2);
    expect(newChromatogram.getSerieNames()).toEqual(['ms']);
});
