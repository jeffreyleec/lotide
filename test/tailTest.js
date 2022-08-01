
const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual(tail([1,2,5]), [2, 5]);
assertArraysEqual(tail([1,2,3]), [1, 7]);