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
  // iterate through array
  const pairingArray = []
  for (let i = 0; i < array.length; i += 1) {
    // check the pairing array at each iteration in case array[i] is a match there
    if (pairingArray.includes(array[i])) {
      return true;
    } else {
      // calculate the opposing number to be equal to target, then push that number into pairing array
      pairingArray.push(target-array[i]);
    }
  }
  // otherwise return false
  return false;
}

console.log(subsetSum([3, 7, 4, 2], 5)) // - > true, 3 + 2 = 5
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) // -> true, 3 + 12 + 5 + 12 = 32
console.log(subsetSum([8, 2, 4, 12], 13)) // -> false
console.log(subsetSum([8, -2, 1, -3], 6)) // -> true, 8 + 1 + (-3) = 6

module.exports = subsetSum;
