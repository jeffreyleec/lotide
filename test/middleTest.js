// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');



// console.log('test')



// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 8]);
// assertArraysEqual(middle([1, 2, 3]),[2]);
// assertArraysEqual(middle([1, 2, 3, 4]),[2,4]);
// assertArraysEqual(middle([1, 2, 3]),[2]);

const assert = require('chai').assert;

const middle = require('../middle');

describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });


  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [2,3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3]);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

});

// strict equal - string?
//deep equal - array
//