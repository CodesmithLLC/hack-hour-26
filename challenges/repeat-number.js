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
  array.sort();
  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] === array[i - 1]) return array[i];
  }
}

module.exports = repeatNumbers;

console.log(repeatNumbers([1, 3, 4, 5, 6, 7, 2, 10, 7, 8, 9]));
