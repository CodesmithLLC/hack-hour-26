/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n, numbers = 0) {
  if (n === 0 && numbers === 2) return true;
  if (arr.length === 0) return false;
  return twoSum(arr.slice(1), n, numbers) || twoSum(arr.slice(1), n - arr[0], numbers + 1);
}

module.exports = twoSum;
