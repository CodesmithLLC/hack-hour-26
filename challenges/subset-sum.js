/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
    // loop over the array
    for (let i = 0; i < array.length; i++) {
        // loop over the array starting at the next value
        for (let j = i + 1; j < array.length; j++) {
            // set the sum to be the first value plus the second
            let sum = array[i] + array[j];
            // let the counter be the third value
            let counter = j + 1;
            // while the sum is less than the target and the counter is less the array length
            while (sum < target && counter < array.length) {
                // keep adding to the sum
                sum += array[counter];
                counter++;
            }
            if (sum === target) return true;
        }
    }
    // otherwise return false
    return false;
}

console.log(subsetSum([3, 7, 4, 2], 5))
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32))
console.log(subsetSum([8, 2, 4, 12], 13))
console.log(subsetSum([8, -2, 1, -3], 6))


module.exports = subsetSum;
