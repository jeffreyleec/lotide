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
    return `🟢🟢🟢  Assertion Passed: ${actual} === ${expected}`
  } else{
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`

  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);





//console.log(results1);

console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]))