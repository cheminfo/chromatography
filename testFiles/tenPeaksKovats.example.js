import { xySortX } from 'ml-spectra-processing';
import { SpectrumGenerator } from 'spectrum-generator';
import { Chromatogram } from '../src';

const nbPeaks = 20;
const from = 0;
const to = nbPeaks * 100;

let spectrumGenerator = new SpectrumGenerator({
  from,
  to,
  nbPoints: to - from + 1,
  peakWidthFct: () => 10,
});
for (let i = 1; i < nbPeaks; i++) {
  spectrumGenerator.addPeak([i * 100, i * 10]);
}
let { x, y } = spectrumGenerator.getSpectrum();

// we add some virtual ms spectra
let ms = [];
for (let i = 0; i < x.length; i++) {
  if (i > 0 && i % 100 === 0) {
    let data = {
      x: [43, 57, 71, 85, (i / 100) * 14 + 2],
      y: [100, 100, 100, 100, 10],
    };
    data = xySortX(data);
    ms.push([data.x, data.y]);
  } else {
    ms.push([[], []]);
  }
}
export const tenPeaksKovats = new Chromatogram(x, { tic: y, ms });
