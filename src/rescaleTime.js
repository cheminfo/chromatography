/**
 * Modifies the time applying the conversion function
 * @param {Array<number>} originalTime - Original list of time values
 * @param {function(number)} conversionFunction - Function that given a number computes the new value
 * @return {Array<number>} - Modified list of time values
 */
export function rescaleTime(originalTime, conversionFunction) {
    return originalTime.map(conversionFunction);
}
