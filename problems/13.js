var fs = require('fs');

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

var lines = [];

function func(data) {
    // console.log('Line: ' + data);
    lines.push(data);
}

var input = fs.createReadStream('./data/13.json');
readLines(input, func);

var done = () => {
    var sum = lines.reduce((prev, curr) => prev + parseInt(curr));
    console.log(sum);
};

console.log('Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.')