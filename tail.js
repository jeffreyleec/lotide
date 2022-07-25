const tail = function(arry) {
  let leftovers = arry.slice(1);
  return leftovers;
};




const assertEqual = function(actual, expected) {
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
      } else if (i === actual.length - 1) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
      }
    }
  }
};

// TEST CODE
assertEqual(tail([1,2,3]), [2, 5]);
assertEqual(tail([1,2,3]), [2, 3]);