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

// var my_array = [3,4,6,10,11,15,21];
// var another_array = [1,5,8,12,14,19];

// function mergeArrays(arr1, arr2) {
// let arr1Copy = [...arr1]
// let arr2Copy = [...arr2]

// arr2Copy.forEach(val => {
// arr1Copy.push(val)
// })

// let merged = arr1Copy.sort((a,b) => {
// return a-b
// })

// return merged
// }

var my_array = [3, 4, 6, 10, 11, 15, 21];
var another_array = [3, 4, 5, 8, 12];

function mergeArrays(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && arr2.length) {
    if (arr1[i] > arr2[j]) {
      results.push(arr2[j]);
      j++;
    } else {
      results.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

mergeArrays(my_array, another_array);

mergeArrays(my_array, another_array);

module.exports = mergeArrays;
