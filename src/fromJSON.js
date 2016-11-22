'use strict';

const Chromatogram = require('./Chromatogram');

/**
 * Parse from a JSON element to a new Chromatogram
 * @param {Array<object>} json - Result from the toJSON
 * @return {Chromatogram} - New parsed Chromatogram
 */
function fromJSON(json) {
    let time = new Array(json.length);
    let tic = new Array(json.length);
    let ms = new Array(json.length);

    for (var i = 0; i < json.length; i++) {
        time[i] = json[i].time;
        tic[i] = json[i].tic;
        ms[i] = [new Array(json[i].mass.length), new Array(json[i].mass.length)];
        for (var j = 0; j < json[i].mass.length; j++) {
            ms[i][0][j] = json[i].mass[j].mass;
            ms[i][1][j] = json[i].mass[j].intensity;
        }
    }

    let chrom = new Chromatogram(time);
    chrom.addSerie({
        dimension: 1,
        name: 'tic',
        data: tic
    });
    chrom.addSerie({
        dimension: 2,
        name: 'ms',
        data: ms
    });

    return chrom;
}

module.exports = fromJSON;
