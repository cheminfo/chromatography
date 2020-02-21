import { SpectrumGenerator } from 'spectrum-generator';
import { Chromatogram } from '../src';

const nbPeaks = 20;

let spectrumGenerator = new SpectrumGenerator({
  start: 0,
  end: nbPeaks * 100,
  pointsPerUnit: 1,
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
    ms.push([
      [43, 57, 71, 85, (i / 100) * 14 + 2],
      [100, 100, 100, 100, 10],
    ]);
  } else {
    ms.push([[], []]);
  }
}
export const tenPeaksKovats = new Chromatogram(x, { tic: y, ms });
