export function integrate1D(time, serie, from, to, fromIndex, toIndex) {
    if (serie.dimension !== 1) throw new Error('The serie name is not of dimension 1');
    if (!serie.data) return 0;

    let total = 0;
    for (let i = fromIndex; i < toIndex; i++) {
        let timeStart = time[i];
        let timeEnd = time[i + 1];
        let heightStart = serie.data[i];
        if (i === fromIndex) { // need to check the exact starting point
            heightStart = serie.data[i] + (serie.data[i + 1] - serie.data[i]) * (from - timeStart) / (timeEnd - timeStart);
            timeStart = from;
        }

        let heightEnd = serie.data[i + 1];
        if (i === toIndex - 1) {
            heightEnd = serie.data[i] + (serie.data[i + 1] - serie.data[i]) * (timeEnd - to) / (timeEnd - timeStart);
            timeEnd = to;
        }
        total += (timeEnd - timeStart) * (heightStart + heightEnd) / 2;
    }
    return total;
}
