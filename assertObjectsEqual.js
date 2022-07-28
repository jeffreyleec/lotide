const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢  Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const eqObjects = function(object1, object2) {

  const keys1 = Object.keys(object1).sort();
  const keys2 = Object.keys(object2).sort();

  //console.log(keys1)
  //console.log(keys2)


  //console.log("\nstart")
  //console.log(keys1, keys2)

  if (!eqArrays(keys1, keys2)) {
    return false;
  }

  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    //console.log(value1, value2)


    if (Array.isArray(value1)) {
      if (!eqArrays(value1, value2)) {
        //console.log("eq arry failed!!!!")
        return false;
      }
      continue;
    }


    if (value1 !== value2) {
    //console.log("value check fail")
      return false;
    }

    
  }
  return true;
};


const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
  
};


const assertObjectsEqual = function(object1, object2) {
  const result = eqObjects(object1,object2);
  console.log(object1, object2, result);
  assertEqual(result,true);
};



const object1 = { a: '1', b: 2 };
const object2 = { b: 2, a: '1' };

assertObjectsEqual(object1,object2);