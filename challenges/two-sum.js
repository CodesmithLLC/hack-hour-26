/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let p1 = 0;
  let p2 = 1;

  while (arr[p1]) {
    if (p1 > n) {
      p1 += 1;
      p2 = p1 + 1;
    }
    if (p2 > n) {
      p2 += 1;
    }
    if (!arr[p2]) {
      p1 += 1;
      p2 = p1 + 1;
    }
    if (arr[p1] + arr[p2] === n) {
      return true;
    }
    p2 += 1;
  }
  return false;
}

function twoSum2(arr, n) {
  if (arr.indexOf(n - arr[0]) > 0) return true;
  if (arr[0] === undefined) return false;
  return twoSum2(arr.slice(1), n);
}

console.log(twoSum2([1, 8, 2, 10, 3, 5], 25));

module.exports = twoSum2;
