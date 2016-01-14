var integer = require('../math/integer.js'),
    modulus = require('../math/modulus.js');

var numbers = integer.integerArray(1, 999);
var multiples = numbers.filter((number) => { return modulus.modulusOfAny(number, [3, 5]) });
console.log('Find the sum of all the multiples of 3 or 5 below 1000.')
console.log(multiples.reduce((prev, curr) => {
    return prev + curr;
}));