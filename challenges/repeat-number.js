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

// function repeatNumbers(array) {
//   const unique = {};

//   for (let i = 0; i < array.length; i += 1) {
//     // grab the current number from array
//     const num = array[i];

//     // check if it has alreay been added to unique numbers ->
//     // true means it has already been added, num is the element that appears twice
//     if (unique[num]) return num;

//     // it wasn't there, so add it to unique
//     unique[num] = true;
//   }

//   // no duplicate found
//   return undefined;
//   // return 'none found';
// }

function repeatNumbers(array) {
  array.sort();
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === array[i + 1]) return array[i];
  }
  return undefined;
}

const array = [1, 2, 3, 3];

console.log(`3: ${repeatNumbers(array)}`);

module.exports = repeatNumbers;
