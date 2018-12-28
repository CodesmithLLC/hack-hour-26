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

  let beg, end;

  for(let i=0; (i< Math.floor(array.length/2)); i++){
    beg = array[i];
    end =array[array.length-(i+1)];
    array[i] = end;
    array[array.length-(i+1)] = beg;
  }

  return array;

}

let a = ['h','e','l','l','o'];
console.log(reverseInPlace(a));

module.exports = reverseInPlace;
