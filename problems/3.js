var prime = require('../math/prime.js'),
    integer = require('../math/integer.js');


var numbers = prime.factors(600851475143); // Four millions
console.log('What is the largest prime factor of the number 600851475143.')
console.log(integer.largest(numbers));