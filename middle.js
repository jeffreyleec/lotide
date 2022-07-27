// const eqArrays = function(actual, expected) {
//   for (let i = 0; i < actual.length; i++) {
//     if (actual[i] !== expected[i]) {
//       //return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
//       return false
//     }
//   }
//   //return `🟢🟢🟢  Assertion Passed: ${actual} === ${expected}`;
//   return true
// };


// const assertArraysEqual = function(actual, expected) {
//   if(eqArrays(actual, expected)) {
//     console.log(`🟢🟢🟢  Assertion Passed: ${actual} === ${expected}`)
//   } else{
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)

//   }
// };

const middle = function(arry) {
  let midNum = [];
  if (arry.length % 2 === 0) {
    let index = arry.length / 2 - 1;
    midNum.push(arry[index],arry[index] + 1);
    //midNum.push(arry[index]+1)

  } else {
    let index = (arry.length + 1) / 2 - 1;
    midNum.push(arry[index]);
  }

  return midNum;

};


console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));
