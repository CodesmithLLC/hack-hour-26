/**
 * Imagine you have lists sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *

 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
   let newArray = arr1.concat(arr2).sort((a,b) => a-b);
   console.log(newArray);
   return(newArray);
}


// Test your code
var myArray = [3,4,6,10,11,15,21];
var anotherArray = [1,5,8,12,14,19];

mergeArrays(myArray, anotherArray); // should log -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]

module.exports = mergeArrays;
