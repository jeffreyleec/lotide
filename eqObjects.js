const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢  Assertion Passed: ${actual} === ${expected}`);
    //return `🟢🟢🟢  Assertion Passed: ${actual} === ${expected}`
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    //return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
    
 }
};

const eqObjects = function(object1, object2) {
  let objectOneKeys = Object.keys(object1).sort()
  let objectOneLength = Object.keys(object1).length
  let objectTwoKeys = Object.keys(object2).sort()
  let objectTwoLength = Object.keys(object2).length
  
  if (objectOneLength !== objectTwoLength) { //same length
    return false
  }
  
  for (let i = 0; i < objectOneKeys.length; i++) {
    if (objectOneKeys[i] !== objectTwoKeys[i]) {
      return false
    }
  }
  
  
  for(let keysOne of objectOneKeys){
   if(object1[keysOne] !== object2[keysOne]) { // since same keys, check obj 1 and obj 2 
    return false
   }  
  }
  
  
  return true
  };






// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false



// console.log(assertEqual(eqObjects(cd, dc), true));
// console.log(assertEqual(eqObjects(cd, cd2), false));

module.exports = eqObjects