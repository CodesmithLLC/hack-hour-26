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
  // * CHECK EDGE CASES FOR EMPTY ARRAYS
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  if (arr1.length === 0 && arr2.length === 0) return undefined;

  // * DECLARE MERGED ARRAY
  let mergedArr = [];
  // * LOOP OVER ARRAY AND COMPARE VALUES
  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      mergedArr.push(arr1[0]);
      arr1.shift();
    }
    if (arr2[0] <= arr1[0]) {
      mergedArr.push(arr2[0]);
      arr2.shift();
    }
  }
  return [...mergedArr, ...arr1, ...arr2];
}

arr1 = [1, 3, 4, 5, 6, 10, 11, 15, 21];

arr2 = [8, 12, 14, 19];

console.log(mergeArrays(arr1, arr2));

module.exports = mergeArrays;
