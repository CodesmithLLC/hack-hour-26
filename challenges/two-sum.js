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

module.exports = twoSum;
