export function integrate2D(time, serie, from, to, fromIndex, toIndex) {
    if (serie.dimension !== 1) throw new Error('The serie is not of dimension 2');
    if (!serie.data) return [];

    let data = [];
    for (let i = fromIndex; i <= toIndex; i++) {

        // TODO
        /*
        for (var j = 0; j < ms[i][0].length; j++) {
            // search possible position
            var position = {
                index: -1,
                distance: Number.MAX_VALUE
            };
            for (var k = 0; k < masses.length; k++) {
                // TODO work in progress
            }

            // check if merge needed
        }
        */

    }
    return data;
}
