/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  let storage = {};
  for (let i = 0; i < array.length; i ++) {
    //check our storage object for array[i];
    if (storage[array[i]]) {
    //if there, return that element
    storage = null;
    return array[i];
  }
    //if not there, add to storage object
    else {
      storage[array[i]] = true;
    }
  }
}

let array = [1, 5, 6, 7, 8, 5];
console.log(repeatNumbers(array))




module.exports = repeatNumbers;
