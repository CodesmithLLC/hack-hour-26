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
  // check for array with elements
  if (array.length === 0) return undefined;
  // create a pointer for beginning and end of array;
  let i = 0;
  let j = array.length - 1;
  // create variable to temporarily store reassigned element
  let tempElement;
  // loop over array
  while (i < j) {
    // assign current element at ith index to tempElement
    tempElement = array[i];
    // reassign first index to store last index's element
    array[i] = array[j];
    // reassisgn last index's element to store tempElement
    array[j] = tempElement;
    // increment i by one, and decrement j by one;
    i++;
    j--;
  }
  return array;
}

const array = [1, 2, 3, 4, 5, 6];
console.log(reverseInPlace(array)); // => [6, 5, 4, 3, 2, 1]
module.exports = reverseInPlace;
