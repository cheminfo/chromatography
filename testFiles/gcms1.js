import { SpectrumGenerator } from 'spectrum-generator';
import { Chromatogram } from '../src';

const nbPeaks = 5;
const from = 0;
const to = nbPeaks * 10;

let spectrumGenerator = new SpectrumGenerator({
  from,
  to,
  nbPoints: to - from + 1,
  peakWidthFct: () => 3,
});
for (let i = 1; i < nbPeaks; i++) {
  spectrumGenerator.addPeak([i * 10, i * 10]);
}
let { x, y } = spectrumGenerator.getSpectrum();

console.log({ x, y });

// we add some virtual ms spectra
let ms = [];
for (let i = 0; i < x.length; i++) {
  if (i > 2 && (i % 10 < 2 || i % 10 > 8) && i < x.length - 2) {
    let mass = Math.round(i / 10) * 10;
    ms.push([mass, mass + 10, mass + 20]);
  } else {
    ms.push([[], []]);
  }
}
console.log(ms);
export const tenPeaksKovats = new Chromatogram(x, { tic: y, ms });
