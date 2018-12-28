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
    // Challenge: reverse an array in place
    // iterate over the array
    // create a placeholder for the current first character
    // assign the current first character the value of the current last character...
    // then assign the current last character the value assigned to placeholder (formerly the current first character)
    // repeat the process with the current first character + 1 and the current last character - 1 
    // stop once you've reached the midpoint of the array
    let temp;	
  
    for (let i = 0; i < array.length/2; i += 1){
        temp = array[i];        
        let lastChar = array.length - 1;
        array[i] = array[lastChar - i];     
        array[lastChar - i] = temp;
        }
   
    return array;

}

module.exports = reverseInPlace;
