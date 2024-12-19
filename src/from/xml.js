import { parseMZ } from 'mzdata';

import { fromJSON } from '../Chromatogram';

export async function fromXML(xml) {
  return fromJSON(await parseMZ(xml));
}
