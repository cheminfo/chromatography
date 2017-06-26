const {fromText} = require('../..');

test('Parse a text', () => {
    const text = `
        1,2
        2,3
        3,4
    `;

    let newChromatogram = fromText(text);
    expect(newChromatogram.getSerie('intensity').data.length).toEqual(3);
    expect(newChromatogram.times.length).toEqual(3);
    expect(newChromatogram.times).toEqual([1, 2, 3]);
    expect(newChromatogram.getSerieNames()).toEqual(['intensity']);
});

test('Parse a text with options', () => {
    const text = `
        1,2,3
        2,3,4
        3,4,5
    `;

    let newChromatogram = fromText(text, {
        xColumn: 1,
        yColumn: 2
    });
    expect(newChromatogram.getSerie('intensity').data.length).toEqual(3);
    expect(newChromatogram.times.length).toEqual(3);
    expect(newChromatogram.times).toEqual([2, 3, 4]);
    expect(newChromatogram.getSerieNames()).toEqual(['intensity']);
});
