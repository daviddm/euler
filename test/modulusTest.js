var chai = require('chai'),
    modulus = require('../math/modulus.js');

describe('Modulus', () => {
    describe('Modulus of Many', () => {
        it('Should parse 1 divider', (done) => {
            chai.assert.isTrue(modulus.modulusOfMany(2, [1]));
            done();
        });
        it('Should fail', (done) => {
            chai.assert.isFalse(modulus.modulusOfMany(3, [2]));
            done();
        });
        it('Should succeed with 2 devisors', (done) => {
            chai.assert.isTrue(modulus.modulusOfMany(6, [2,3]));
            done();
        });
        it('Should fail with first of the 2 devisors', (done) => {
            chai.assert.isFalse(modulus.modulusOfMany(6, [4,2]));
            done();
        });
        it('Should fail with second of the 2 devisors', (done) => {
            chai.assert.isFalse(modulus.modulusOfMany(6, [2,4]));
            done();
        });
    });

    describe('Modulus of Any', () => {
        it('Should parse 1 divider', (done) => {
            chai.assert.isTrue(modulus.modulusOfAny(2, [1]));
            done();
        });
        it('Should fail', (done) => {
            chai.assert.isFalse(modulus.modulusOfAny(3, [2]));
            done();
        });
        it('Should succeed with 2 devisors', (done) => {
            chai.assert.isTrue(modulus.modulusOfAny(6, [2,3]));
            done();
        });
        it('Should succeed with second of the 2 devisors', (done) => {
            chai.assert.isTrue(modulus.modulusOfAny(6, [4,2]));
            done();
        });
        it('Should succeed with first of the 2 devisors', (done) => {
            chai.assert.isTrue(modulus.modulusOfAny(6, [2,4]));
            done();
        });
        it('Should fail with 2 devisors', (done) => {
            chai.assert.isFalse(modulus.modulusOfAny(6, [5,4]));
            done();
        });
    });
});