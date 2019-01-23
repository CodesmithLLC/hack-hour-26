/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // cache previous entries from array
  const cache = {};

  for (let i = 0; i < arr.length; i += 1) {
    const val = arr[i];
    if (cache[n - val] !== undefined) return true;
    cache[val] = val;
  }

  return false;
}

module.exports = twoSum;

// const arr = [1, 2, 2];

// console.log(`expect false: ${twoSum(arr, 0)}`);
// console.log(`expect false: ${twoSum(arr, 1)}`);
// console.log(`expect false: ${twoSum(arr, 2)}`);
// console.log(`expect true: ${twoSum(arr, 3)}`);
// console.log(`expect true: ${twoSum(arr, 4)}`);
// console.log(`expect false: ${twoSum(arr, 5)}`);

// console.log(`expect false: ${twoSum([], 0)}`);
// console.log(`expect false: ${twoSum([1], 1)}`);
