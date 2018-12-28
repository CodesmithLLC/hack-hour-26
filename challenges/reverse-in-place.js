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
    // declare a tempory variable as a place holder for one value while we swap
    let temp;
    // loop through half of the array, swapping it's symmetrical partner as we go.
    for (let i = 0; i < array.length / 2; i++) {
        let posToSwap = array.length - 1 - i;
        temp = array[i];
        array[i] = array[posToSwap];
        array[posToSwap] = temp;
    }
    // return the array
    return array;
}

module.exports = reverseInPlace;
