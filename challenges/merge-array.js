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
    // two arrays, already sorted, merge them
    let mergedArray = [];
    let arr1spl = arr1.slice(); // creating a copy to not manipulate the original array
    let arr2spl = arr2.slice();
    let shift;
    while(arr1spl.length > 0 && arr2spl.length > 0){
        if(arr1spl[0] < arr2spl[0]) {
            shift = arr1spl.shift();
                mergedArray.push(shift)
        } else {
                shift = arr2spl.shift();
                mergedArray.push(shift);
      }
      if(arr1spl.length === 0){
        shift = arr2spl.shift();
        mergedArray.push(shift);
      }
      if(arr2spl.length === 0){
        shift = arr1spl.shift();
        mergedArray.push(shift);
      }
    }
    return mergedArray;
}

console.log(mergeArrays([3,4,6,10,11,15,21], [1,5,8,12,14,19]));
module.exports = mergeArrays;
