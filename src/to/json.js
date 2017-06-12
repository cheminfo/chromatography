/**
 * Create an object of Chromatogram
 * @return {object}
 */
export function toJSON() {
    return {
        times: this.times,
        series: this.series
    };
}
