import { xySortX } from 'ml-spectra-processing/xy';
import { SpectrumGenerator } from 'spectrum-generator';

import type { ChromatogramSeries2DData } from '../src/index.ts';
import { Chromatogram } from '../src/index.ts';

const nbPeaks = 20;
const from = 0;
const to = nbPeaks * 100;

const spectrumGenerator = new SpectrumGenerator({
  from,
  to,
  nbPoints: to - from + 1,
  peakWidthFct: () => 10,
});
for (let i = 1; i < nbPeaks; i++) {
  spectrumGenerator.addPeak([i * 100, i * 10]);
}
const { x, y } = spectrumGenerator.getSpectrum();

// we add some virtual ms spectra
const ms: ChromatogramSeries2DData = [];
for (let i = 0; i < x.length; i++) {
  if (i > 0 && i % 100 === 0) {
    const data = {
      x: [43, 57, 71, 85, (i / 100) * 14 + 2],
      y: [100, 100, 100, 100, 10],
    };
    const sorted = xySortX(data);
    ms.push([sorted.x, sorted.y]);
  } else {
    ms.push([[], []]);
  }
}
export const tenPeaksKovats = new Chromatogram(x, { tic: y, ms });
