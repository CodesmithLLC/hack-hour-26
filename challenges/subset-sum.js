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
  let count = 0;
  let i = 0;
  let result = 0;
  //helper function to check through each value and move to next set if target is not reached
  //keep count until count equals array length multiplied by itself

  while (count !== array.length * array.length) {
    if (array[i] === undefined) {
      array[i + 1];
    }
    result += array[i];
    i++;
    if (result === target) {
      return true;
    }
  }

  return false;
}

subsetSum([3, 7, 4, 2], 5);

module.exports = subsetSum;
