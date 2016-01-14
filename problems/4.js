var integer = require('../math/integer.js');


var numbers1 = integer.integerArray(100, 999),
    numbers2 = numbers1.slice(0),
    palindromes = [];

numbers1.forEach( a => {
    numbers2.forEach(b => {
        var result = (a * b).toString();
        if (result == result.split('').reverse().join('')) {
            palindromes.push( parseInt(result) );
        }
    })
});
console.log('Find the largest palindrome made from the product of two 3-digit numbers.')
console.log(integer.largest(palindromes));