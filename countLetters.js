const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const firstNames = [
  "lighthouse labs",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const countOnly = function(str) {
  const results = {};
  //console.log(typeof str)
  //strJoined = str.Join('')

  for (const letters of str) {

    if (letters !== " ") {
      if (results[letters]) {
        results[letters] += 1;
      } else {
        results[letters] = 1;
      }
    
    }
  }
  console.log(results);
  return results;
};

const result1 = countOnly(firstNames[0]);

assertEqual(result1["l"], 2);
assertEqual(result1["i"], 1);
assertEqual(result1["g"], 1);
assertEqual(result1["a"], 1);
//lighthouse labs