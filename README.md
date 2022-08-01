# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jeffreyleec/lotide`

**Require it:**

`const _ = require('@jeffreyleec/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arry)`: returns first index, arry[0]
* `tail(arry)`: returns string - head, arry[1] and onward 
* `middle(arry)`: returns middle value of array. If even returns two numbers. 
* `assertArraysEqual(actual, expected)`: compares two arrays
* `assertEqual(actual, expected)`: compares two values. 
* `countLetters(str)`: counts number of each letter in str
* `countOnly(allItems, itemsToCount)`: counts certain keys in a list.
* `eqArrays(actual, expected)`: compares two arrays === 
* `eqObjects(object1, object2)`: returns true/false if objects are ===
* `findKey(object,callback)`: returns key with most 'callback' value 
* `findKeyByValue(object,value)`: searches object using value returns key
* `flatten(arry)`: turns simple nested arrays into one array
* `letterPositions(word)`: tracks # of letters and the respective index
* `map(array, callback)`: maps the array callback condition
* `reverse(input)`: reverse
* `takeUntil(array, callback)`: returns character(s) of array untill 'callback' condition
* `without(source, itemsToRemove)`: removes 'itemsToRemove' from 'source'
* `pigLatin(input)`: takes in a string applies pig latin. IG - P - AY. 
