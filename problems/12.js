var integer = require('../math/integer.js');

var tick = true,
    i = 0,
    numbers = [],
    number = 0;
    triangleNumbers = [],
    triangleNumber = 0;

while (tick) {
    i++;
    number += i;
    triangleNumber = number;
    // numbers.push(i);
    // triangleNumbers.push(numbers.reduce((prev, curr) => prev + curr, 0));

    // if ( integer.devisors(triangleNumbers.slice(-1)).length > 5 ) {
    if ( integer.devisors(triangleNumber, true) > 500 ) {
        tick = false;
    }

    // if (triangleNumbers.length >= 7) {
    //     tick = false;
    // }
}

console.log('What is the value of the first triangle number to have over five hundred divisors.')
console.log(triangleNumber, integer.devisors(triangleNumber,true));