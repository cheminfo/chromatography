/**
 * Filters a mass object
 * @param {object} massXYObject - Object with x and y data
 * @param {Array<number>} massXYObject.x - Array of mass values
 * @param {Array<number>} massXYObject.y - Array of abundance values
 * @param {object} options - Options for the integral filtering
 * @param {number} [options.thresholdFactor = 0] - Every peak that it's bellow the main peak times this factor fill be removed (when is 0 there's no filter)
 * @param {number} [options.maxNumberPeaks = Number.MAX_VALUE] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
 * @param {number} [options.groupWidth = 0] - When find a max can't be another max in a radius of this size
 * @return {object} - Object with filtered x and y data
 */
export function massFilter(massXYObject, options = {}) {
    const {thresholdFactor = 0, maxNumberPeaks = Number.MAX_VALUE, groupWidth = 0} = options;

    let max = -1;
    let massList = new Array(massXYObject.x.length);
    for (let i = 0; i < massXYObject.x.length; ++i) {
        massList[i] = {
            x: massXYObject.x[i],
            y: massXYObject.y[i]
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

    let ans = {
        x: new Array(filteredList.length),
        y: new Array(filteredList.length)
    };
    for (let i = 0; i < filteredList.length; ++i) {
        ans.x[i] = filteredList[i].x;
        ans.y[i] = filteredList[i].y;
    }

    return ans;
}

/**
 * Filters based in groupWidth
 * @ignore
 * @param {Array<object>} list - Sorted list of XY-objects to be filtered
 * @param {number} maxNumberPeaks - Maximum number of peaks for each mass spectra
 * @param {number} groupWidth - When find a max can't be another max in a radius of this size
 * @return {Array<object>} - List of XY-objects filtered
 */
export function moreDistinct(list, maxNumberPeaks, groupWidth) {
    let len = 0;
    if (maxNumberPeaks > list.length) {
        maxNumberPeaks = list.length;
    }
    let filteredList = new Array(maxNumberPeaks);

    for (let i = 0; (i < list.length) && (len < maxNumberPeaks); ++i) {
        let outRange = true;
        for (let j = 0; j < len && outRange; ++j) {
            outRange = outRange && !((list[i].x > (filteredList[j].x - groupWidth)) && (list[i].x < (filteredList[j].x + groupWidth)));
        }
        if (outRange) {
            filteredList[len++] = list[i];
        }
    }
    filteredList.length = len;

    return filteredList;
}