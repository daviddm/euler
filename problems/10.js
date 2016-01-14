var prime = require('../math/prime.js'),
    integer = require('../math/integer.js');



var numbers = integer.integerArray(0, 2000000), // Two millions
    primes = numbers.filter( number => prime.isPrime(number) );


console.log('Find the sum of all the primes below two million.')
console.log(primes.reduce((prev,curr) => prev + curr,0));