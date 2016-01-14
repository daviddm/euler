var prime = require('../math/prime.js');



var result = 1000;
    numbers = [];

found:
for (var a = 1; a < result; a++) {
    for (var b = a+1; a + b < result; b++) {
        var pyth = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        if (pyth % 1 !== 0 || pyth <= b) {
            continue;
        }
        console.log(a,b,pyth)
        if (a+b+pyth == result) {
            numbers.push(a,b,pyth);
            break found;
        }
    }
}

console.log('There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.')
console.log(numbers, 'Product ->', numbers.reduce((prev,curr) => prev*curr,1));