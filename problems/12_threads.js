var integer = require('../math/integer.js'),
    Worker = require('webworker-threads').Worker;

var tick = true,
    i = 0,
    numbers = [],
    number = 0;
    triangleNumbers = [],
    triangleNumber = 0,
    workerNumber = 4,
    workers = [];

for (i = 1; i <= workerNumber; i++) {
    number += i;
    var worker = new Worker(() => {
        this.onmessage = (event) => {
            // var devisors = integer.devisors(event.data);
            var devisors = [];
            for (var a = 1; a <= event.data; a++) {
                if (event.data % a === 0) {
                    devisors.push(a);
                }
            }
            if (devisors.length > 5) {
                postMessage({status: true, number: event.data});
            } else {
                postMessage({status: false, number: event.data});
            }
        }
    });
    worker.onmessage = (event) => {
        // console.log('Reveiced data ', event.data)
        if (event.data.status) {
            console.log('Found number', event.data.number);
            workers.map(worker => worker.terminate());
        } else {
            // console.log('Nope number', event.data.number);
            i++;
            number += i;
            worker.postMessage(number);
        }
    };
    worker.postMessage(number);
}


console.log('What is the value of the first triangle number to have over five hundred divisors.')
// console.log(triangleNumber);