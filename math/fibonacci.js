var exports = module.exports = {};

exports.generateSequenceLength = length => {
    var sequence = [1,2];
    while (sequence.length < length) {
        index = sequence.length;
        sequence.push( sequence[index-2] + sequence[index-1] )
    }
    if (sequence.length > length) {
        sequence = sequence.slice(0, length);
    }
    return sequence;
};
exports.generateToMax = max => {
    var sequence = [1,2];
    while (sequence[sequence.length-1] < max) {
        index = sequence.length;
        sequence.push( sequence[index-2] + sequence[index-1] )
    }
    if (sequence[sequence.length-1] > max) {
        sequence.pop();
    }
    return sequence;
};