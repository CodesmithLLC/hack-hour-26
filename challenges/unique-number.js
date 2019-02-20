/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
// function uniqueNumber(array) {
//   // start a number cache
//   // { number: count }
//   const counts = {};

//   // loop through the array,
//   array.forEach((number) => {
//     // check if it exists in cache -> no -> initialize as cache[number] = 0
//     if (counts[number] === undefined) counts[number] = 0;

//     // increment count at number
//     counts[number] += 1;
//   });

//   let unique;
//   // grab the keys from the cache
//   Object.keys(counts).forEach((key) => {
//     if (counts[key] === 1) unique = key;
//   });
//   // loop through, and if the value === 1, return key

//   return unique;
// }

function uniqueNumber(array) {
  const { length } = array;
  array.sort();

  // handle the first and last elements
  if (array[0] !== array[1]) return array[0];
  if (array[length - 1] !== array[length - 2]) return array[length - 1];

  for (let i = 1; i < length - 1; i += 1) {
    const num = array[i];
    // if the number doesn't match EITHER of its neighbors, it's unique
    if (num !== array[i - 1] && num !== array[i + 1]) return num;
  }
}

// console.log(`2: ${uniqueNumber([2, 4, 1, 1, 3, 3, 4])}`);


module.exports = uniqueNumber;
