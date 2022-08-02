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

// const word = "hello";

// assertArraysEqual(letterPositions(word).h, [0]); //h
// assertArraysEqual(letterPositions(word).e, [1]); //e
// assertArraysEqual(letterPositions(word).l, [2,3]); //l
// assertArraysEqual(letterPositions(word).o, [4]); //o

module.exports = letterPositions;