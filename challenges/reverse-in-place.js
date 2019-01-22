'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
  const end = array[array.length];
  // take the first element in array, send it to end
  for (let i = array.length; i > 0; i -= 1) {
    if (array[i] === end) {
      return array
    } else {
      array.push(array[i]);
    }
  }
}

// start at back of array, iterate backwards

const arrayOfChars = ['a', 'b', 'c', 'd']
console.log(reverseInPlace(arrayOfChars));

module.exports = reverseInPlace;
