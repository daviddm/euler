var exports = module.exports = {};

/**
 * Compares a number if it's devisible with every devider
 */
exports.modulusOfMany = (number, dividers) => {
    return dividers.every(divider => number % divider == 0);
};

/**
 * Compares a number if it's devisible with any of the deviders
 */
exports.modulusOfAny = (number, dividers) => {
    return dividers.some(divider => number % divider == 0);
};