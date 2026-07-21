import type { Chromatogram } from '../chromatogram.ts';
import type { MergeOptions, MergeResult } from '../ms/merge.ts';
import { merge } from '../ms/merge.ts';
import type { ChromatogramRange } from '../types.ts';

export interface AppendMassResultValue {
  ms: MergeResult;
}

export type AppendMassResult<
  PeakType extends ChromatogramRange = ChromatogramRange,
> = PeakType & AppendMassResultValue;

export type AppendMassOptions = Omit<MergeOptions, 'range'>;

/**
 * Append MS spectra to a list of peaks
 * @param chromatogram
 * @param peaks - Array of range {from:, to:}
 * @param options
 * @returns A copy of ranges with ms appended
 */
export function appendMass<
  PeakType extends ChromatogramRange = ChromatogramRange,
>(
  chromatogram: Chromatogram,
  peaks: PeakType[],
  options: AppendMassOptions = {},
): Array<AppendMassResult<PeakType>> {
  const { mergeThreshold = 0.3, seriesName = 'ms' } = options;
  const result = [];
  // integrate MS
  for (const peak of peaks) {
    const massSpectrum = merge(chromatogram, {
      mergeThreshold,
      seriesName,
      range: peak,
    });
    result.push({
      ...peak,
      ms: massSpectrum,
    });
  }
  return result;
}
