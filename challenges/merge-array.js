/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a function to merge our arrays of orders into one sorted array.
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
  const newArray = [];
  let p1 = 0;  // for my_array
  let p2 = 0;  // for another_array

  if (arr1.length < arr2.length) {
    while (arr1[p1] !== undefined) {
      if (arr1[p1] < arr2[p2]) {
        newArray.push(arr1[p1]);
        p1++ 
      } else {
        newArray.push(arr2[p2]);
        p2++
      };
    }
  } else {
    while (arr2[p2] !== undefined) {
      if (arr1[p1] < arr2[p2]) {
        newArray.push(arr1[p1]);
        p1++ 
      } else {
        newArray.push(arr2[p2]);
        p2++
      };
    }
  }
  return newArray;
};

const my_array = [3,4,6,10,11,15, 21];
const another_array = [1,5,8,12,14,19];

console.log(mergeArrays(my_array, another_array));

module.exports = mergeArrays;
