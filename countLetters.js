const assertEqual = require('./assertEqual');

const countOnly = function(str) {
  const results = {};


  for (const letters of str) {

    if (letters !== " ") {
      if (results[letters]) {
        results[letters] += 1;
      } else {
        results[letters] = 1;
      }
    
    }
  }
  //console.log(results);
  return results;
};

// const result1 = countOnly(firstNames[0]);

// assertEqual(result1["i"], 1);
// assertEqual(result1["g"], 1);
// assertEqual(result1["a"], 1);
//lighthouse labs


module.exports = countOnly;
