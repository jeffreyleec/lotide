const eqObjects = function(object1, object2) {
  let objectOneKeys = Object.keys(object1).sort();
  let objectOneLength = Object.keys(object1).length;
  let objectTwoKeys = Object.keys(object2).sort();
  let objectTwoLength = Object.keys(object2).length;
  





  if (objectOneLength !== objectTwoLength) { //same length
    return false;
  }
  
  for (let i = 0; i < objectOneKeys.length; i++) {  // check same keys
    if (objectOneKeys[i] !== objectTwoKeys[i]) {
      return false;
    }
  }
  
  
  for (let keysOne of objectOneKeys) { // check same key values
    if (object1[keysOne] !== object2[keysOne]) { // since same keys, check obj 1 and obj 2
      return false;
    }
  
    
  }


  
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);

  } else {
    console.log(`Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};



const object1 = { a: '1', b: 2 };
const object2 = { b: 2, a: '9' };

assertObjectsEqual(object1,object2);