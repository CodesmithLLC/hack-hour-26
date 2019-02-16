/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

// ? SLIDING WINDOW PROBLEM
function maxSubarray(arr) {
  // ? CHECK FOR VALID INPUT
  if (!Array.isArray(arr)) return undefined;
  // ? CREATE A VAR TO STORE MAX SUM
  let maxSum = -Infinity;
  let accumulatedValue = -Infinity;
  // ? LOOP OVER ARR AND UPDATE maxSum and accumulatedSum
  for (let num of arr) {
    accumulatedValue = Math.max(accumulatedValue + num, num);
    maxSum = Math.max(accumulatedValue, maxSum);
  }
  // ? RETURN MAX SUM
  return maxSum;
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));

module.exports = maxSubarray;
