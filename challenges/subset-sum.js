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
  // create a for loop that will iterate through each element of the array
  for (let i = 0; i < array.length; i += 1) {
    let decrementTarget = target - array[i];
    const targetSet = new Set(array); // move this inside of the outer for loop
    let decrementCounter = 0;
    while (decrementTarget !== 0 || decrementCounter !== array.length) {
      // using a while loop, check to see if the current decrement target decremting index exists in the set
      // if it does exist, remove it from the set and decrement the decrementTarget until it reaches zero
      if (targetSet.has(decrementCounter)) {
        targetSet.delete(decrementCounter);
        decrementCounter -= decrementCounter;
        if (decrementTarget === 0) return true;
      }
    }
    // conditional statement return false
  }
}

module.exports = subsetSum;
