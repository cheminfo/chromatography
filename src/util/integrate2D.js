import {asc} from 'num-sort';

export function integrate2D(serie, fromIndex, toIndex, slot) {
    if (serie.dimension !== 2) throw new Error('The serie is not of dimension 2');
    if (!serie.data) return [];

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
