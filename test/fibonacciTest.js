var chai = require('chai'),
    fibonacci = require('../math/fibonacci.js');

describe('Fibonacci', () => {
    describe('Generate Sequence Length', () => {
        it('Should give first number (1)', (done) => {
            chai.expect(fibonacci.generateSequenceLength(1)).to.deep.equal([1]);
            done();
        });
        it('Should give first 2 numbers (1,2)', (done) => {
            chai.expect(fibonacci.generateSequenceLength(2)).to.deep.equal([1,2]);
            done();
        });
        it('Should give first 10 numbers (1, 2, 3, 5, 8, 13, 21, 34, 55, 89)', (done) => {
            chai.expect(fibonacci.generateSequenceLength(10)).to.deep.equal([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
            done();
        });
    });

    describe('Generate Sequence to Max', () => {
        it('Should generate to 13, with max 13', (done) => {
            chai.expect(fibonacci.generateToMax(13)).to.deep.equal([1, 2, 3, 5, 8, 13]);
            done();
        });
        it('Should generate to 13, with max 14', (done) => {
            chai.expect(fibonacci.generateToMax(14)).to.deep.equal([1, 2, 3, 5, 8, 13]);
            done();
        });
    });
});