var fs = require('fs')
    bigInt = require("big-integer");    ;

function readLines(input, func) {
  var remaining = '';

  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      func(line);
      index = remaining.indexOf('\n');
    }
  });

  input.on('end', function() {
    if (remaining.length > 0) {
      func(remaining);
      }
    done();
  });
}

var bigNumber = bigInt(0);

function func(data) {
    bigNumber = bigNumber.add(data);
}

var input = fs.createReadStream('./data/13.json');
readLines(input, func);

var done = () => {
    console.log(bigNumber.toString().slice(0,10));
};

console.log('Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.')