import type { Chromatogram } from './chromatogram.ts';
import { cosineSimilarity } from './ms/cosine_similarity.ts';
import { appendMass } from './peaks/append_mass.ts';
import type { ChromatogramPeak } from './peaks/get_peaks.ts';
import { getPeaks } from './peaks/get_peaks.ts';
import { vectorify } from './vectorify.ts';

export interface SpectraComparisonOptions {
  /**
   * Every peak that is below the main peak times this factor fill be removed (when it is 0, there's no filter).
   * @default `0`
   */
  thresholdFactor?: number;

  /**
   * Maximum number of peaks for each mass spectrum (when it is Number.MAX_VALUE, there's no filter).
   * @default `Number.MAX_VALUE`
   */
  maxNumberPeaks?: number;

  /**
   * When find a max can't be another max in a radius of this size.
   * @default `0`
   */
  groupWidth?: number;

  /**
   * Filter all objects that are below `heightFilter` times the median of the height.
   * @default: `2`
   */
  heightFilter?: number;

  /**
   * Power applied to the mass values.
   * @default `3`
   */
  massPower?: number;

  /**
   * Power applied to the abundance values.
   * @default `0.6`
   */
  intPower?: number;

  /**
   * Minimum similarity value to consider them similar.
   * @default `0.7`
   */
  similarityThreshold?: number;
}

export interface SpectraComparisonResult {
  /**
   * Array of peaks, integrated mass spectra and weighted mass spectra for the first chromatogram.
   */
  peaksFirst: ChromatogramPeak[];

  /**
   * Array of peaks, integrated mass spectra and weighted mass spectra for the second chromatogram.
   */
  peaksSecond: ChromatogramPeak[];
  /**
   * Array of similarities.
   */
  peaksSimilarity: number[];
}

/**
 * Preprocessing task over the signalsj
 * @param chromatogram - Chromatogram to process
 * @param options - Options object (same as spectraComparison)
 * @returns Array of peaks, integrated mass spectra and weighted mass spectra
 */
function preprocessing(
  chromatogram: Chromatogram,
  options: SpectraComparisonOptions,
) {
  // peak picking
  let peaks = getPeaks(chromatogram, options);
  peaks = peaks.sort((a, b) => a.from - b.to);

  // integrate mass in the peaks
  const integratedMs = appendMass(chromatogram, peaks);
  const vector = vectorify(integratedMs, options);
  return {
    peaks,
    integratedMs,
    vector,
  };
}

const defaultOptions = {
  thresholdFactor: 0,
  maxNumberPeaks: Number.MAX_VALUE,
  groupWidth: 0,
  heightFilter: 2,
  massPower: 3,
  intPower: 0.6,
};

/**
 * Returns the most similar peaks between two GC/MS and their similarities.
 * @returns Most similar peaks and their similarities.
 */
export function spectraComparison(
  chrom1: Chromatogram,
  chrom2: Chromatogram,
  options: SpectraComparisonOptions = {},
): SpectraComparisonResult {
  const { similarityThreshold = 0.7 } = options;
  options = { ...defaultOptions, ...options };

  // peak picking
  const reference = preprocessing(chrom1, options);
  const sample = preprocessing(chrom2, options);

  // similarity between MS
  const len = Math.max(sample.peaks.length, reference.peaks.length);
  const similarityPeaks = {
    chrom1: new Array<ChromatogramPeak>(len),
    chrom2: new Array<ChromatogramPeak>(len),
    similarity: new Array<number>(len),
  };
  let similarLen = 0;

  // Similarity matrix
  for (let i = 0; i < sample.peaks.length; ++i) {
    let max = {
      similarity: -3,
      chrom1: reference.peaks[0],
      chrom2: sample.peaks[0],
    };
    let biggerCounter = 0;
    for (let j = 0; j < reference.peaks.length; ++j) {
      const sim = cosineSimilarity(
        sample.vector[i].x,
        sample.vector[i].y,
        reference.vector[j].x,
        reference.vector[j].y,
      );

      if (sim > similarityThreshold && sim > max.similarity) {
        max = {
          similarity: sim,
          chrom1: reference.peaks[j],
          chrom2: sample.peaks[i],
        };
      }
      if (sim > similarityThreshold) {
        ++biggerCounter;
      }
    }
    if (biggerCounter === 1) {
      similarityPeaks.chrom1[similarLen] = max.chrom1;
      similarityPeaks.chrom2[similarLen] = max.chrom2;
      similarityPeaks.similarity[similarLen++] = max.similarity;
    }
  }

  similarityPeaks.chrom1.length = similarLen;
  similarityPeaks.chrom2.length = similarLen;

  const duplicates: Record<string, number[]> = {};
  for (let i = 0; i < similarLen; ++i) {
    if (duplicates[similarityPeaks.chrom1[i].retentionTime]) {
      duplicates[similarityPeaks.chrom1[i].retentionTime].push(i);
    } else {
      duplicates[similarityPeaks.chrom1[i].retentionTime] = [i];
    }
  }

  const peaksChrom1 = [];
  const peaksChrom2 = [];
  const peaksSimilarity = [];
  for (const val in duplicates) {
    if (duplicates[val].length === 1) {
      peaksChrom1.push(similarityPeaks.chrom1[duplicates[val][0]]);
      peaksChrom2.push(similarityPeaks.chrom2[duplicates[val][0]]);
      peaksSimilarity.push(similarityPeaks.similarity[duplicates[val][0]]);
    }
  }

  return {
    peaksFirst: peaksChrom1,
    peaksSecond: peaksChrom2,
    peaksSimilarity,
  };
}
