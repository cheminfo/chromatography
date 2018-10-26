import mzData from 'mzdata';

import { fromJSON } from './json';

export function fromMzML(xml, kind = 'mzData') {
  switch (kind) {
    case 'mzData':
      return fromJSON(mzData(xml));
    default:
      throw new Error(`Unable to parse from "${kind}" format`);
  }
}
