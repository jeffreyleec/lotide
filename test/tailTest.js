
// const tail = require('../tail');
// const assertArraysEqual = require('../assertArraysEqual');


// assertArraysEqual(tail([1,2,5]), [2, 5]);
// assertArraysEqual(tail([1,2,3]), [1, 7]);



const assert = require('chai').assert;

const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 5] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(tail([1,2,5]), [2, 5]);
  });


  it("returns [1, 7] for [1, 2, 7]", () => {
    assert.deepEqual(tail([1,2,7]), [2, 7]);
  });



});