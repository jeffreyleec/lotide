const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');



console.log('test')


// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4])
// assertArraysEqual(middle([1, 2, 3]),[2])
// assertArraysEqual(middle([1, 2, 3, 4]),[2,3])
// assertArraysEqual(middle([1, 2, 3]),[3])

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 8]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4]),[2,4]);
assertArraysEqual(middle([1, 2, 3]),[2]);