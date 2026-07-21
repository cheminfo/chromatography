// @ts-expect-error mzdata is not typed
import { parseMZ } from 'mzdata';

import type { Chromatogram } from '../chromatogram.ts';
import { fromJSON } from '../chromatogram.ts';

/**
 * Creates a new Chromatogram from supported XML formats.
 * @param xml - String containing the XML chromatogram.
 */
export async function fromXML(xml: string): Promise<Chromatogram> {
  return fromJSON(await parseMZ(xml));
}
