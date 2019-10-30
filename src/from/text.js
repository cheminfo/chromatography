import { parseXY } from 'xy-parser';

import { Chromatogram } from '../Chromatogram';

/**
 * Creates a new Chromatogram element based in a Txt string
 * @param {string} text - String containing the data as CSV or TSV
 * @param {object} [options] - Options object for the parser
 * @return {Chromatogram} - New class element with the given data
 */
export function fromText(text, options) {
  options = Object.assign({}, options, { arrayType: 'xxyy' });
  const data = parseXY(text, options);

  const time = data[0];
  let series = {
    intensity: data[1],
  };

  return new Chromatogram(time, series);
}
