// index.js
const head = require('./head');
const tail = require('./tail');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const reverse = require('./reverse');
const takeUntil = require('./takeUntil');
const without = require('./without');
const pigLatin = require('./pigLatin');
const middle = require('./middle');



// module.exports = {
//   head: head,
//   tail: tail,
//   middle: middle,
//   assertArraysEqual: assertArraysEqual,
//   assertEqual: assertEqual,
//   countLetters: countLetters,
//   countOnly: countOnly,
//   eqArrays: eqArrays,
//   eqObjects: eqObjects,
//   findKey: findKey,
//   findKeyByValue: findKeyByValue,
//   flatten: flatten,
//   letterPositions: letterPositions,
//   map: map,
//   reverse: reverse,
//   takeUntil: takeUntil,
//   without: without,
//   pigLatin: pigLatin,
// };

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  reverse,
  takeUntil,
  without,
  pigLatin,
};