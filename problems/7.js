var prime = require('../math/prime.js');


var result = 0,
    found = 0,
    tick = true;

while (tick) {
    result++;
    if (prime.isPrime(result)) {
        found++;
    }
    if (found == 10001) {
        tick = false;
    }
}

console.log('What is the 10 001st prime number.')
console.log(result);