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
    const mergeArr = [];
    let i1 = 0;
    let i2 = 0;
    const maxLength = arr1.length >= arr2.length ? arr1.length : arr2.length;

    while (i1 < maxLength || i2 < maxLength) {
        if (!arr1[i1]) {
            mergeArr.push(arr2[i2]);
            i2 += 1;
        }
        else if (!arr2[i2]) {
            mergeArr.push(arr1[i1]);
            i1 += 1;
        }

        while (arr1[i1] < arr2[i2]) {
            mergeArr.push(arr1[i1]);
            i1 += 1
        }
        while (arr2[i2] < arr1[i1]) {
            mergeArr.push(arr2[i2]);
            i2 += 1;
        }
    }
    return mergeArr;
}

const arr1 = [3, 4, 6, 10, 11, 15];
const arr2 = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(arr1, arr2));

module.exports = mergeArrays;
