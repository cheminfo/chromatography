import mzData from 'mzdata';

import { fromJSON } from '../Chromatogram';

export function fromXML(xml) {
  return fromJSON(mzData(xml));
}
