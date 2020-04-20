import { readFileSync } from 'fs';
import { join } from 'path';

import { Chromatogram, appendMass, vectorify, fromJcamp } from '..';
import { lorentzian } from '../../testFiles/examples';

describe('vectorify', () => {
  it('from a Diesel chromatogram', () => {
    const path = join(__dirname, '../../testFiles/jcamp/P064.JDX');
    const jcamp = readFileSync(path, 'utf8');
    const chromatogram = fromJcamp(jcamp);
    expect(chromatogram).toHaveLength(6992);

    let peakList = chromatogram.getPeaks();

    let sampleMS = chromatogram.getSeries('ms').data;
    expect(sampleMS).not.toHaveLength(0);
    let integratedList = appendMass(chromatogram, peakList, sampleMS);
    expect(peakList).toHaveLength(integratedList.length);

    let vector = vectorify(integratedList);
    expect(vector).toHaveLength(peakList.length);
  });

  it('triplet', () => {
    const size = 30;
    const fourth = size / 4;
    let times = new Array(size);
    let tic = new Array(size);
    let ms = new Array(size);
    for (let i = 0; i < size; ++i) {
      times[i] = i;
      tic[i] =
        lorentzian(i, fourth) +
        2 * lorentzian(i, 2 * fourth) +
        lorentzian(i, 3 * fourth);
      ms[i] = [
        [1, 2, 3],
        [1, 1, 1],
      ];
    }
    let chromatogram = new Chromatogram(times);
    chromatogram.addSeries('tic', tic);
    chromatogram.addSeries('ms', ms);

    let peakList = chromatogram.getPeaks();
    expect(peakList).toHaveLength(3);

    let sampleMS = chromatogram.getSeries('ms').data;
    expect(sampleMS).not.toHaveLength(0);
    let integratedList = appendMass(chromatogram, peakList, sampleMS);
    expect(peakList).toHaveLength(integratedList.length);

    let vector = vectorify(integratedList);
    expect(vector).toHaveLength(peakList.length);
  });

  it('simple case', () => {
    let peaks = [
      {
        ms: {
          x: [1, 2, 3],
          y: [1, 1, 1],
        },
      },
    ];

    expect(vectorify(peaks, { massPower: 1 })).toStrictEqual([
      {
        x: [1, 2, 3],
        y: [1, 2, 3],
      },
    ]);

    expect(vectorify(peaks)).toStrictEqual([
      {
        x: [1, 2, 3],
        y: [1, 8, 27],
      },
    ]);
  });
});
