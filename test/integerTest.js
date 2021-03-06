var chai = require('chai'),
    integer = require('../math/integer.js');

describe('Integer', () => {
    describe('integerArray', () => {
        it('Should give array filled with 0,1,2,3', (done) => {
            var arr = integer.integerArray(0, 3);
            chai.expect(arr).to.deep.equal([0, 1, 2, 3]);
            done();
        });
        it('Should give array filled with 0,2,4', (done) => {
            var arr = integer.integerArray(0, 4, 2);
            chai.expect(arr).to.deep.equal([0, 2, 4]);
            done();
        });
        it('Should return array correctly when max is not even with step.', (done) => {
            var arr = integer.integerArray(0, 5, 2);
            chai.expect(arr).to.deep.equal([0, 2, 4]);
            done();
        });
        it('Should return array correctly when only 1 number is within range', (done) => {
            var arr = integer.integerArray(0, 2, 4);
            chai.expect(arr).to.deep.equal([0]);
            done();
        });
    });

    describe('Largest', () => {
        it('Should find largest', (done) => {
            chai.expect(integer.largest([3,4,7,5,1])).to.equal(7);
            done();
        });
    });

    describe('Devisors', () => {
        it('Should find singel devisor', (done) => {
            chai.expect(integer.devisors(1)).to.deep.equal([1]);
            done();
        });
        it('Should find 2 devisors', (done) => {
            chai.expect(integer.devisors(2)).to.deep.equal([1,2]);
            done();
        });
        it('Should find 4 devisors', (done) => {
            chai.expect(integer.devisors(10)).to.deep.equal([1,2,5,10]);
            done();
        });
        it('Should find 4 devisors, only numeric', (done) => {
            chai.expect(integer.devisors(10,true)).equal(4);
            done();
        });
    });
});