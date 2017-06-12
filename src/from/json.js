import {Chromatogram} from '../Chromatogram';

/**
 * Parse from a JSON element to a new Chromatogram
 * @param {object} json - Result from the toJSON method
 * @return {Chromatogram} - New parsed Chromatogram
 */
export function fromJSON(json) {
    let series = json.series;
    let times = json.times;
    let chromatogram = new Chromatogram(times);

    if (Array.isArray(series)) {
        for (let i = 0; i < series.length; i++) {
            chromatogram.addSerie(series[i].name, series[i].data);
        }
    } else {
        for (let key of Object.keys(series)) {
            chromatogram.addSerie(key, series[key].data, {
                meta: series[key].meta
            });
        }
    }
    return chromatogram;
}
