import { convert as converter } from 'jcampconverter';

import { fromJSON } from './json';

/**
 * Creates a new Chromatogram element based in a JCAMP string
 * @param {string} jcamp - String containing the JCAMP data
 * @return {Chromatogram} - New class element with the given data
 */
export function fromJcamp(jcamp) {
  const data = converter(jcamp, { chromatogram: true }).chromatogram;
  return fromJSON(data);
}
