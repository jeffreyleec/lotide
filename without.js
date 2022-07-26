

// const eqArrays = function(actual, expected) {
//   for (let i = 0; i < expected.length; i++) {
//     if (actual[i] === expected[i]) {
//       //return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
//       actual = actual.splice(i,1);
//     }
//   }
  
//   //return `🟢🟢🟢  Assertion Passed: ${actual} === ${expected}`;
// };


// const assertArraysEqual = function(actual, expected) {
//   for (let i = 0; i < expected.length; i++) {
//     if (actual[i] === expected[i]) {
//       return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
//     }
//   }
  
//   return `🟢🟢🟢  Assertion Passed: ${actual} === ${expected}`;
// };


const without = function(source, itemsToRemove) {
  let filteredString = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let x = 0; x < source.length; x++) {
      if (itemsToRemove[i] === source[x]) {
        filteredString.splice(x,1);

      }
    }
  }
  return filteredString;
};
const words = ["hello", "world", "lighthouse"];
console.log(without(words,["lighthouse"]));
//console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));

