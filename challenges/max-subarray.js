/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  const negIndex = [];
  let biggest = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < 0) negIndex.push(i);
    biggest += arr[i];
  }
  while (negIndex.length !== 0) {
    let left = 0;
    let right = 0;
    for (let j = 0; j <= negIndex[0]; j += 1) {
      left += arr[j];
    }
    for (let k = negIndex[negIndex.length - 1]; k < arr.length; k += 1) {
      right += arr[k];
    }
    if (right < left && (biggest - right > biggest)) {
      biggest -= right;
      negIndex.pop();
    } else if (left < right && (biggest - left > biggest)) {
      biggest -= left;
      negIndex.shift();
    } else {
      negIndex.shift();
      negIndex.pop();
    }
  }

  return biggest;
}

module.exports = maxSubarray;

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));
console.log(maxSubarray([]));
