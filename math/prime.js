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