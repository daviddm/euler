var exports = module.exports = {};

exports.factors = number => {
    var remainder = number,
        factors = [];
        for (var i = 2; i <= remainder; i++) {
            while ((remainder % i) === 0 && i !== number) {
                factors.push(i);
                remainder /= i;
            }
        }
        return factors;
};
exports.isPrime = number => {
    if (isNaN(number) || !isFinite(number) || number % 1 || number < 2) {
        return false;
    }
    if (number % 2 === 0) {
        return number == 2;
    }
    var sqrt = Math.sqrt(number);
    for (var i = 3; i <= sqrt; i += 2) {
        if (number % i === 0) {
             return false;
        }
    }
    return true;
}