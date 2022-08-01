// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertArreaysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  map: map,
  reverse: reverse,
  takeUntil: takeUntil,
  without: without,
  //pigLatin: pigLatin,
};