import { fromJSON } from './json';
import { mzData } from 'mzmjs';

export function fromMzML(xml, kind = 'mzData') {
  switch (kind) {
    case 'mzData':
      return fromJSON(mzData(xml));
    default:
      throw new Error(`Unable to parse from "${kind}" format`);
  }
}
