import { convert as converter } from 'jcampconverter';

import { fromJSON } from '../Chromatogram';

export function fromJcamp(jcamp) {
  const data = converter(jcamp, { chromatogram: true }).flatten[0].chromatogram;
  return fromJSON(data);
}
