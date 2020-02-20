import { SpectrumGenerator } from 'spectrum-generator';
import { Chromatogram } from '../src';
let spectrumGenerator = new SpectrumGenerator({ start: 0, end: 1000 });

spectrumGenerator.addPeak([100, 100]);
spectrumGenerator.addPeak([200, 20]);
spectrumGenerator.addPeak([300, 30]);
spectrumGenerator.addPeak([400, 40]);
spectrumGenerator.addPeak([500, 50]);

const { x, y } = spectrumGenerator.getSpectrum();

const chromatogram = new Chromatogram(x, { tic: y });

const peaks = chromatogram.getPeaks({ heightFilter: 2 });
console.log(peaks);
