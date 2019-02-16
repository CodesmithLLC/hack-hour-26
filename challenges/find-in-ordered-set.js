/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

// ? Check the middle of the array first, if the value is less than the middle, split the array left, if greater split the array right.
function findInOrderedSet(arr, target) {
  // * Check for valid input
  if (!Array.isArray(arr)) return false;
  // * Declare var to store index of arr
  let i;
  // * Copy arr
  let tempArr = arr.slice();
  // * Iterate through arr while length is > 1
  while (tempArr.length > 1) {
    // * Place current index in middle of array
    i = Math.floor(tempArr.length / 2);
    // * Check if middle element equals target
    if (tempArr[i] === target) return true;
    // * If target is greater than current element, slice arr to the right
    if (target > tempArr[i]) tempArr = tempArr.slice(i + 1);
    // * If target is less than current element, slice arr to the left
    else if (target < tempArr[i]) tempArr = tempArr.slice(0, i);
  }
  // * If target equals last element return true
  return tempArr[0] === target;
}

console.log(findInOrderedSet([1, 4, 6, 7, 9, 17, 45], 2));

module.exports = findInOrderedSet;
