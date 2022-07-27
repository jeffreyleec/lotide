const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🟢🟢🟢  Assertion Passed: ${actual} === ${expected}`;

  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  
};

const eqObjects = function(object1, object2) {
  for (let itemsOne in object1) {    //loops through the keys in object1
    for (let itemsTwo in object2) { //loops through the keys in object2

      if (itemsOne === itemsTwo) { //if both objects have a matching key
        
        if (object1[itemsOne].length > 1 && object2[itemsTwo].length > 1) { //is it an arry with a length > 1
          if (eqArrays(object1[itemsOne],object2[itemsTwo]) === false) { //helper function compares arrys and spits out true|false -> if false return false
            return false;
          }
        }
        
        if (object1.itemsOne !== object2.itemsTwo) {
          return false;
        }

      } else if (!object1[itemsTwo] || !object2[itemsOne]) {
        return false;
      
      }
      
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



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false



console.log(assertEqual(eqObjects(cd, dc), true));
console.log(assertEqual(eqObjects(cd, cd2), false));