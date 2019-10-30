import { fromText } from '../..';

test('Parse a text', () => {
  const text = `
        1,2
        2,3
        3,4
    `;

  let newChromatogram = fromText(text);
  expect(newChromatogram.getSerie('intensity').data).toHaveLength(3);
  expect(newChromatogram.times).toHaveLength(3);
  expect(newChromatogram.times).toStrictEqual([1, 2, 3]);
  expect(newChromatogram.getSerieNames()).toStrictEqual(['intensity']);
});

test('Parse a text with options', () => {
  const text = `
        1,2,3
        2,3,4
        3,4,5
    `;

  let newChromatogram = fromText(text, {
    xColumn: 1,
    yColumn: 2,
  });
  expect(newChromatogram.getSerie('intensity').data).toHaveLength(3);
  expect(newChromatogram.times).toHaveLength(3);
  expect(newChromatogram.times).toStrictEqual([2, 3, 4]);
  expect(newChromatogram.getSerieNames()).toStrictEqual(['intensity']);
});
