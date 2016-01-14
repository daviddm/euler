var chai = require('chai'),
    prime = require('../math/prime.js');

describe('Prime', () => {
    describe('Factors', () => {
        it('Should find factors of 10', (done) => {
            chai.expect(prime.factors(10)).to.deep.equal([2, 5]);
            done();
        });
        it('Should find factors of 13195', (done) => {
            chai.expect(prime.factors(13195)).to.deep.equal([5, 7, 13, 29]);
            done();
        });
        it('Should find no factors of 7', (done) => {
            chai.expect(prime.factors(7)).to.deep.equal([]);
            done();
        });
    });

    describe('Factors', () => {
        it('Should find 1 to NOT be a prime', (done) => {
            chai.assert.isFalse(prime.isPrime(1));
            done();
        });
        it('Should find 2 to be a prime', (done) => {
            chai.assert.isTrue(prime.isPrime(2));
            done();
        });
        it('Should find 3 to be a prime', (done) => {
            chai.assert.isTrue(prime.isPrime(3));
            done();
        });
        it('Should find 4 to not be a prime', (done) => {
            chai.assert.isFalse(prime.isPrime(14));
            done();
        });
    });
});