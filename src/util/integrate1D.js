'use strict';

function integrate1D(time, serie, from, to, fromIndex, toIndex) {
    if (serie.dimension!==1) throw new Error(`The serie name is not of dimension 1`);
    if (! serie.data) return 0;

    let total=0;
    for (let i = fromIndex; i < toIndex; i++) {
        let timeStart=time[i];
        if (i===fromIndex) { // need to check the exact starting point
            timeStart=from;
        }
        let timeEnd=time[i+1];
        if (i===toIndex-1) {
            timeEnd=to;
        }

        total+=(timeEnd - timeStart) * (serie.data[i] + serie.data[i+1]) / 2;
    }
    return total;
}

module.exports = integrate1D;
