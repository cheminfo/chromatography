'use strict';

const binarySearch = require('binary-search');
const ascValue = (a, b) => (a.value - b.value);
const ascTime = (a, b) => (a.time - b.time);

/**
 * Returns a function that allows to convert from time to Kovats or from Kovats to time
 * @param {Array<object>} kovatsConversionTable - List of time-kovats from the reference
 * @param {object} [options = {}] - Options object
 * @param {boolean} [options.revert = false] - True for convert from Kovats to time, false otherwise
 * @return {function(number)} - One parameter function that convert to one dimension to the other
 */
function kovatsConversionFunction(kovatsConversionTable, options = {}) {
    const {revert = false} = options;

    if (revert) {
        const values = kovatsConversionTable.sort(ascValue);

        return (index) => {
            let position = binarySearch(values, {value: index}, ascValue);

            if (position < 0) {
                position = ~position;

                // handle extreme cases
                if (position === 0 || position === values.length) {
                    return 0;
                }

                let smallerAlcane = values[position - 1].time;
                let largerAlcane = values[position].time;
                return (index - values[position - 1].value) * (largerAlcane - smallerAlcane) / 100
                    + smallerAlcane;
            } else {
                return values[position].time;
            }
        };
    } else {
        const times = kovatsConversionTable.sort(ascTime);

        return (time) => {
            let position = binarySearch(times, {time}, ascTime);

            if (position < 0) {
                position = ~position;

                // handle extreme cases
                if (position === 0 || position === times.length) {
                    return 0;
                }

                let smallerAlcane = times[position - 1].time;
                let largerAlcane = times[position].time;
                return 100 * (time - smallerAlcane) / (largerAlcane - smallerAlcane)
                    + times[position - 1].value;
            } else {
                return times[position].value;
            }
        };
    }
}

module.exports = kovatsConversionFunction;
