const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      //return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
      return false
    }
  }
  //return `🟢🟢🟢  Assertion Passed: ${actual} === ${expected}`;
  return true
};


const assertArraysEqual = function(actual, expected) {
  if(eqArrays(actual, expected)) {
    console.log(`🟢🟢🟢  Assertion Passed: ${actual} === ${expected}`)
  } else{
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)

  }
};








assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false