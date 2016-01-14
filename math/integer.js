var exports = module.exports = {}

/**
 * Fills array with integers from min to max with increments of step.
 */
exports.integerArray = (min, max, step) => {
    if(step == null) { step = 1 }
    var numbers = Math.floor( (max - min) / step + 1 );
    return Array(numbers).fill().map((e,i)=>min + i*step)
};

exports.largest = arr => {
    return arr.reduce( (prev, curr) => curr > prev ? curr : prev )
}