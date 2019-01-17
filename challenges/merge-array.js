/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 *
 * BONUS:
 * Complete in O(n) time
 *
 */

function mergeArrays(arr1, arr2) {
  const output = [];
  let i = 0;
  let j = 0;

  while (arr1[i] !== undefined && arr2[j] !== undefined) {
    // equality handles edge case
    if (arr1[i] <= arr2[j]) {
      output.push(arr1[i]);
      i += 1;
    }
    if (arr2[j] < arr1[i]) {
      output.push(arr2[j]);
      j += 1;
    }
  }

  const leftover = (arr1[i] === undefined) ? arr2.slice(j) : arr1.slice(i);
  return output.concat(leftover);
}

module.exports = mergeArrays;

// *** TESTING *** //

// // two sorted arrays of equal length
// const evens = [2, 4, 6, 8];
// const odds = [1, 3, 5, 7];

// console.log(mergeArrays(evens, odds));
// console.log(mergeArrays(odds, evens));

// // different lengths
// const short = [2, 7, 19];
// const long = [4, 7, 8, 9, 12, 20, 25];
// console.log(mergeArrays(short, long));
// console.log(mergeArrays(long, short));

// // similar arrays
// console.log(mergeArrays(evens, evens.concat([10])));
