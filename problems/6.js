var integer = require('../math/integer.js');


var numbers = integer.integerArray(1, 100),
    sumSqrt = numbers.reduce((prev, curr) => prev + Math.pow(curr, 2) , 0),
    sqrtSum = Math.pow(numbers.reduce((prev, curr) => prev + curr , 0), 2 );

console.log('Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.')
console.log(sqrtSum, sumSqrt, sqrtSum - sumSqrt);