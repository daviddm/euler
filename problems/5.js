var integer = require('../math/integer.js');


var devisors = integer.integerArray(1, 20).reverse(),
    tick = true,
    i = 20;
console.log(devisors)
while (tick) {
    if (!devisors.every(devider => i % devider === 0 ) ) {
        i++
    } else {
        tick = false
    }
    if (i % 1000000 === 0) {
        console.log(i)
    }
}
console.log('What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20.')
console.log(i);