import { SpectrumGenerator } from 'spectrum-generator';

import { Chromatogram } from '../src';

let spectrumGenerator = new SpectrumGenerator({
  from: 0,
  to: 1000,
  nbPoints: 1000001,
  peakWidthFct: () => 1,
});
spectrumGenerator.addPeak([100, 100]);
spectrumGenerator.addPeak([200, 20]);
spectrumGenerator.addPeak([300, 30]);
spectrumGenerator.addPeak([400, 40]);
spectrumGenerator.addPeak([500, 50]);
let { x, y } = spectrumGenerator.getSpectrum();

export const fivePeaks = new Chromatogram(x, { tic: y });
