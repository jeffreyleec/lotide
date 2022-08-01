// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🟢🟢🟢  Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const assertArraysEqual = function(actual, expected) {
//   for (let i = 0; i < actual.length; i++) {
//     if (actual[i] !== expected[i]) {
//       return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//     }
//   }
  
//   return console.log(`🟢🟢🟢  Assertion Passed: ${actual} === ${expected}`);
// };

const flatten = function(arry) {
  let newArry = [];
  for (const items of arry) {
    if (Array.isArray(items)) {
      for (const indiv of items) {
        newArry.push(indiv);
      }
      
    } else {
      newArry.push(items);

    }
  }
  return newArry;
};

 //console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten