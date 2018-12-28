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
    let midpoint = Math.floor(array.length / 2)
    let j = array.length - 1
    let save = array[j]

    for (let i = 0; i < midpoint; i++) {
        array[j] = array[i];
        array[i] = save;
        j -= 1;
        save = array[j]
    }
   return array;
}



module.exports = reverseInPlace;
