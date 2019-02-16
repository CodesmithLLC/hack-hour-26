/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  if (!Array.isArray(arr) || arr.length === 0) return false;

  if (arr.length === 1) return target === arr[0];

  // find the middle index
  const mid = Math.floor(arr.length / 2);
  const val = arr[mid];

  // compare target to value at middle index
  // target equals -> return true
  if (target === val) return true;

  // target is less -> recurse on the first half of array
  if (target < val) return findInOrderedSet(arr.slice(0, mid), target);

  // target is greater -> recurse on second half of array
  if (target > val) return findInOrderedSet(arr.slice(mid + 1), target);
}

// const ordered = [1];

// // edge cases
// console.log(`false: ${findInOrderedSet(ordered, 0)}`);
// console.log(`false: ${findInOrderedSet({}, 0)}`);
// console.log(`false: ${findInOrderedSet([], 0)}`);
// console.log(`false: ${findInOrderedSet(ordered, 0)}`);
// console.log(`true: ${findInOrderedSet(ordered, 1)}`);
// ordered.push(2);
// ordered.push(3);
// ordered.push(4);
// console.log(`true: ${findInOrderedSet(ordered, 1)}`);
// console.log(`true: ${findInOrderedSet(ordered, 2)}`);
// console.log(`true: ${findInOrderedSet(ordered, 3)}`);
// console.log(`true: ${findInOrderedSet(ordered, 4)}`);


module.exports = findInOrderedSet;
