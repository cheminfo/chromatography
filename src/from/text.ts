import type { ParseXYOptions } from 'xy-parser';
import { parseXY } from 'xy-parser';

import { Chromatogram } from '../chromatogram.ts';

/**
 * Creates a new Chromatogram from text data.
 * @param text - String containing the data as CSV or TSV.
 * @param options
 */
export function fromText(text: string, options: ParseXYOptions = {}) {
  const data = parseXY(text, options);

  const time = data.x;
  const series = {
    intensity: data.y,
  };

  return new Chromatogram(time, series);
}
