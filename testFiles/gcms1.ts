import { SpectrumGenerator } from 'spectrum-generator';

import type { ChromatogramSeries2DData } from '../src/index.ts';
import { Chromatogram } from '../src/index.ts';

const nbPeaks = 5;
const from = 0;
const to = nbPeaks * 10;

const spectrumGenerator = new SpectrumGenerator({
  from,
  to,
  nbPoints: to - from + 1,
  peakWidthFct: () => 3,
});
for (let i = 1; i < nbPeaks; i++) {
  spectrumGenerator.addPeak([i * 10, i * 10]);
}
const { x, y } = spectrumGenerator.getSpectrum();

// we add some virtual ms spectra
const ms: ChromatogramSeries2DData = [];
for (let i = 0; i < x.length; i++) {
  if (i > 2 && (i % 10 < 2 || i % 10 > 8) && i < x.length - 2) {
    const mass = Math.round(i / 10) * 10;
    ms.push([
      [mass, mass + 10, mass + 20],
      [0, 0, 0],
    ]);
  } else {
    ms.push([[], []]);
  }
}

export const tenPeaksKovats = new Chromatogram(x, { tic: y, ms });
