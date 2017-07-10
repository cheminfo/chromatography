import {asc} from 'num-sort';

export function integrate2D(serie, fromIndex, toIndex, slot, method) {
    if (serie.dimension !== 2) throw new Error('The serie is not of dimension 2');
    if (!serie.data) return [];

    switch (method) {
        case 'slot':
            return _slot(fromIndex, toIndex, serie, slot);
        case 'centroid':
            return centroid(fromIndex, toIndex, serie, slot);
        default:
            throw new Error(`Unknown method "${method}"`);
    }
}

function _slot(fromIndex, toIndex, serie, slot) {
    let massDictionary = {};

    for (var i = fromIndex; i <= toIndex; i++) {
        for (var j = 0; j < serie.data[i][0].length; j++) {
            // round the mass value
            var x = serie.data[i][0][j];
            let mass = x + slot / 2 - (x + slot / 2) % slot;

            // add the mass value to the dictionary
            if (massDictionary[mass]) {
                massDictionary[mass] += serie.data[i][1][j];
            } else {
                massDictionary[mass] = serie.data[i][1][j];
            }
        }
    }

    const massList = Object.keys(massDictionary).map((val) => Number(val)).sort(asc);
    let integral = [
        new Array(massList.length),
        new Array(massList.length)
    ];

    for (var k = 0; k < massList.length; k++) {
        integral[0][k] = Number(massList[k]);
        integral[1][k] = massDictionary[massList[k]];
    }
    return integral;
}

function centroid(fromIndex, toIndex, serie, slot) {
    var integral = [[], []];

    for (var i = fromIndex; i <= toIndex; i++) {
        integral = merge(integral, serie.data[i], slot);
    }
    return integral;
}

function merge(previous, data, slot) {
    var leftIndex = 0;
    var rightIndex = 0;
    var merged = [[], []];
    var weightedMass = [[], []];
    var size = 0;

    while ((leftIndex < previous[0].length) && (rightIndex < data[0].length)) {
        if (previous[0][leftIndex] <= data[0][rightIndex]) {
            // append first(left) to result
            if ((size === 0) || (previous[0][leftIndex] - merged[0][size - 1] > slot)) {
                weightedMass[0].push(previous[0][leftIndex] * previous[1][leftIndex]);
                weightedMass[1].push(previous[1][leftIndex]);
                merged[0].push(previous[0][leftIndex]);
                merged[1].push(previous[1][leftIndex++]);
                size++;
            } else {
                weightedMass[0][size - 1] += previous[0][leftIndex] * previous[1][leftIndex];
                weightedMass[1][size - 1] += previous[1][leftIndex];
                merged[0][size - 1] = previous[0][leftIndex];
                merged[1][size - 1] += previous[1][leftIndex++];
            }
        } else {
            // append first(right) to result
            if ((size === 0) || (data[0][rightIndex] - merged[0][size - 1] > slot)) {
                weightedMass[0].push(data[0][rightIndex] * data[1][rightIndex]);
                weightedMass[1].push(data[1][rightIndex]);
                merged[0].push(data[0][rightIndex]);
                merged[1].push(data[1][rightIndex++]);
                size++;
            } else {
                weightedMass[0][size - 1] += data[0][rightIndex] * data[1][rightIndex];
                weightedMass[1][size - 1] += data[1][rightIndex];
                merged[0][size - 1] = data[0][rightIndex];
                merged[1][size - 1] += data[1][rightIndex++];
            }
        }
    }

    while (leftIndex < previous[0].length) {
        // append first(left) to result
        if ((size === 0) || (previous[0][leftIndex] - merged[0][size - 1] > slot)) {
            weightedMass[0].push(previous[0][leftIndex] * previous[1][leftIndex]);
            weightedMass[1].push(previous[1][leftIndex]);
            merged[0].push(previous[0][leftIndex]);
            merged[1].push(previous[1][leftIndex++]);
            size++;
        } else {
            weightedMass[0][size - 1] += previous[0][leftIndex] * previous[1][leftIndex];
            weightedMass[1][size - 1] += previous[1][leftIndex];
            merged[0][size - 1] = previous[0][leftIndex];
            merged[1][size - 1] += previous[1][leftIndex++];
        }
    }

    while (rightIndex < data[0].length) {
        // append first(right) to result
        if ((size === 0) || (data[0][rightIndex] - merged[0][size - 1] > slot)) {
            weightedMass[0].push(data[0][rightIndex] * data[1][rightIndex]);
            weightedMass[1].push(data[1][rightIndex]);
            merged[0].push(data[0][rightIndex]);
            merged[1].push(data[1][rightIndex++]);
            size++;
        } else {
            weightedMass[0][size - 1] += data[0][rightIndex] * data[1][rightIndex];
            weightedMass[1][size - 1] += data[1][rightIndex];
            merged[0][size - 1] = data[0][rightIndex];
            merged[1][size - 1] += data[1][rightIndex++];
        }
    }

    for (var i = 0; i < merged[0].length; i++) {
        merged[0][i] = weightedMass[0][i] / weightedMass[1][i];
    }

    return merged;
}
