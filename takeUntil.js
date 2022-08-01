const takeUntil = function(array, callback) {
 let result = []
  for (item of array) {
    if (!callback(item)) {
      result.push(item)
    } else{
      return result
    } 
  }
}


// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// //console.log(results1);

// //console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// //console.log(results2);


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


// console.log(assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]))
// console.log(assertArraysEqual(results2,[ "I've", 'been', 'to', 'Hollywood' ]))


module.exports = takeUntil;
