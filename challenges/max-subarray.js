/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  const temp = { start: 0, sum: 0 };
  let result = { start: 0, end: 0, sum: 0 };

  for (let i = 0; i < arr.length; i++) {
    temp.sum += arr[i];

    if (temp.sum > result.sum) {
      result = { start: temp.start, end: i, sum: temp.sum };
    }

    if (temp.sum < 0) {
      temp.sum = 0;
      temp.start = i + 1;
    }
  }

  return result.sum;
}

module.exports = maxSubarray;
