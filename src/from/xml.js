import { parseMZ } from 'mzdata';

import { fromJSON } from '../Chromatogram';

export function fromXML(xml) {
  return fromJSON(parseMZ(xml));
}
