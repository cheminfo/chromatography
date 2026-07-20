import { parseXY } from 'xy-parser';

import { Chromatogram } from '../Chromatogram.js';

export function fromText(text, options = {}) {
  const data = parseXY(text, options);

  const time = data.x;
  let series = {
    intensity: data.y,
  };

  return new Chromatogram(time, series);
}
