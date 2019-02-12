/*
 * You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if (arr.length === 0) return 0;

  let total = 0;
  const tailSums = [];
  const headSums = [];

  // memoize the greatest sum of numbers from 0 to i
  // also sum along the way

  arr.forEach((num) => {
    total += num;
    tailSums.push(total);
  });

  // subtract from total for to find sums from i to length-1
  let diff = total;
  arr.forEach((num) => {
    headSums.push(diff);
    diff -= num;
  });

  // find max sum for tail pointer
  let tailIndex = 0;
  let tailMax = tailSums[0];
  tailSums.forEach((sum, i) => {
    if (sum >= tailMax) {
      tailIndex = i;
      tailMax = sum;
    }
  });

  // find max sum for head pointer at an index less than or equal to tailIndex
  let headIndex = 0;
  let headMax = headSums[0];
  for (let i = 0; i <= tailIndex; i += 1) {
    if (headSums[i] > headMax) {
      headIndex = i;
      headMax = headSums[i];
    }
  }

  console.log({
    headIndex,
    tailIndex,
  });

  // create subarray to sum for output
  let max = 0;
  for (let i = headIndex; i <= tailIndex; i += 1) {
    max += arr[i];
  }


  return max;
}

console.log(`18: ${maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])}`);
console.log(`40: ${maxSubarray([15, 20, -5, 10])}`);


module.exports = maxSubarray;
