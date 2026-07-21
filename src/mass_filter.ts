import type { MassSpectrum } from './vectorify.ts';

interface XYObject {
  x: number;
  y: number;
}

export interface MassFilterOptions {
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
}

/**
 * Filters a mass object
 * @param massXYObject - Mass spectrum to filter
 * @param options
 * @returns Object with filtered x and y data.
 */
export function massFilter(
  massXYObject: MassSpectrum,
  options: MassFilterOptions = {},
): MassSpectrum {
  const {
    thresholdFactor = 0,
    maxNumberPeaks = Number.MAX_VALUE,
    groupWidth = 0,
  } = options;

  let max = -1;
  const massList = new Array<XYObject>(massXYObject.x.length);
  for (let i = 0; i < massXYObject.x.length; ++i) {
    massList[i] = {
      x: massXYObject.x[i],
      y: massXYObject.y[i],
    };

    if (massXYObject.y[i] > max) {
      max = massXYObject.y[i];
    }
  }

  // filters based in thresholdFactor
  max *= thresholdFactor;
  let filteredList = massList.filter((val) => val.y > max);

  // filters based in maxNumberPeaks
  if (filteredList.length > maxNumberPeaks || groupWidth !== 0) {
    filteredList.sort((a, b) => b.y - a.y);

    // filters based in groupWidth
    filteredList = moreDistinct(filteredList, maxNumberPeaks, groupWidth);

    filteredList.sort((a, b) => a.x - b.x);
  }

  const ans: MassSpectrum = {
    x: new Array(filteredList.length),
    y: new Array(filteredList.length),
  };
  for (let i = 0; i < filteredList.length; ++i) {
    ans.x[i] = filteredList[i].x;
    ans.y[i] = filteredList[i].y;
  }

  return ans;
}

/**
 * Filters based on groupWidth.
 * @param list - Sorted list of XY-objects to be filtered
 * @param maxNumberPeaks - Maximum number of peaks for each mass spectra
 * @param groupWidth - When find a max can't be another max in a radius of this size
 * @returns List of XY-objects filtered
 */
export function moreDistinct(
  list: XYObject[],
  maxNumberPeaks: number,
  groupWidth: number,
): XYObject[] {
  let len = 0;
  if (maxNumberPeaks > list.length) {
    maxNumberPeaks = list.length;
  }
  const filteredList = new Array<XYObject>(maxNumberPeaks);

  for (let i = 0; i < list.length && len < maxNumberPeaks; ++i) {
    let outRange = true;
    for (let j = 0; j < len && outRange; ++j) {
      outRange =
        outRange &&
        !(
          list[i].x > filteredList[j].x - groupWidth &&
          list[i].x < filteredList[j].x + groupWidth
        );
    }
    if (outRange) {
      filteredList[len++] = list[i];
    }
  }
  filteredList.length = len;

  return filteredList;
}
