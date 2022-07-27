const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    }
  }
  return `🟢🟢🟢  Assertion Passed: ${actual} === ${expected}`;
};




console.log(eqArrays([1, 2, 3], [1, 2])); // => true)
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false