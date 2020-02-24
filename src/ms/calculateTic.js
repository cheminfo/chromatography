import sum from 'ml-array-sum';

export function calculateTic(chromatogram) {
  const ms = chromatogram.getSeries('ms');
  const massSpectra = ms.data;
  const tic = [];
  for (const massSpectrum of massSpectra) {
    if (massSpectrum[1].length > 0) {
      tic.push(sum(massSpectrum[1]));
    } else {
      tic.push(0);
    }
  }

  return tic;
}
