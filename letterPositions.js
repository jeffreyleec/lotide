const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      //return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
      return false;
    }
  }
  //return `🟢🟢🟢  Assertion Passed: ${actual} === ${expected}`;
  return true;
};
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢🟢🟢  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  }
};


const letterPositions = function(word) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < word.length; i++) {

    if (word[i] !== " ") {
      if (results[word[i]]) {
        results[word[i]].push(i);

      } else {
        results[word[i]] = [i];
      }
    
    }
  }
  //console.log(results);
  
  return results;
};

const word = "hello";

assertArraysEqual(letterPositions(word).h, [0]); //h
assertArraysEqual(letterPositions(word).e, [1]); //e
assertArraysEqual(letterPositions(word).l, [2,3]); //l
assertArraysEqual(letterPositions(word).o, [4]); //o

