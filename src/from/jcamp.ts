import { convert as converter } from 'jcampconverter';

import type { Chromatogram } from '../chromatogram.ts';
import { fromJSON } from '../chromatogram.ts';

/**
 * Creates a new Chromatogram from a JCAMP string.
 * @param jcamp - String containing the JCAMP data
 */
export function fromJcamp(jcamp: string): Chromatogram {
  const data = converter(jcamp, { chromatogram: true }).flatten[0].chromatogram;
  return fromJSON(data);
}
