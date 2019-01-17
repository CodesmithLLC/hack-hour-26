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
  const result = [];
  // while arr1 or arr2 have a length greater than 0
  while (arr1.length > 0 || arr1.length > 0) {
    // find the lowest first value from either array and push it into the resultant array
    if (arr1[0] > arr2[0]) result.push(arr2.shift());
    else result.push(arr1.shift());
  }
  // if there is anything left in arr1 or arr2 add the rest to result
  if (arr1.length > 0) {
    arr1.forEach((val) => {
      result.push(val);
    });
  }
  if (arr2.length > 0) {
    arr2.forEach((val) => {
      result.push(val);
    });
  }
  return result;
}

// const myArray = [3, 4, 6, 10, 11, 15, 21, 30, 40];
// const anotherArray = [1, 5, 8, 12, 14, 19, 100, 200, 300];

// console.log(mergeArrays(myArray, anotherArray));

module.exports = mergeArrays;
