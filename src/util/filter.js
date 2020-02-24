export function filter(chromatogram, callback, options = {}) {
  const { copy = false } = options;
  if (copy) {
    chromatogram = chromatogram.copy();
  }

  let times = chromatogram.getTimes();
  let newTimes = [];
  let indexToKeep = [];
  for (let i = 0; i < times.length; i++) {
    if (callback(i, times[i])) {
      indexToKeep.push(i);
      newTimes.push(times[i]);
    }
  }
  chromatogram.times = newTimes;

  for (let key of chromatogram.getSeriesNames()) {
    const series = chromatogram.getSeries(key);
    series.keep(indexToKeep);
  }

  return chromatogram;
}
