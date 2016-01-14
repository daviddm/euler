var fibonacci = require('../math/fibonacci.js');


var numbers = fibonacci.generateToMax(4000000); // Four millions
console.log('By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.')
console.log(numbers.reduce((prev, curr) => {
    return curr % 2 == 0 ? prev + curr : prev;
}, 0));