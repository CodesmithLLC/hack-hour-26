/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

 // begin the range for the total array, find the middle value, if the middle value is the target then return true
 // if the middle number is larger then the target, set the range max to be the middle number and continue with the while loop
 // if the middle number is smaller then the target, then set the range min to the middle number and continue
 // set the middle value to be the middle of the new range

function findInOrderedSet(arr, target) {
  let minIndex = 0;
  let maxIndex = arr.length;
  let halfIndex = Math.ceil(arr.length / 2);
  while (maxIndex - minIndex > 1) {
    let middleVal = arr[halfIndex]
    // check if the number is equal to the middle number
    if (middleVal === target) return true;
    // if middleVal is smaller then target
    if (middleVal < target) {
      // make the minIndex be the new halfIndex
      minIndex = halfIndex;
    // if middleVal is larger then target
    } else if (middleVal > target) {
      // make the maxIndex be the halfIndex
      maxIndex = halfIndex;
    }
    // set the new halfIndex value
    halfIndex = minIndex + Math.ceil((maxIndex - minIndex) / 2);
  }
  return false;
}

const nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 4));
console.log(findInOrderedSet(nums, 2));

module.exports = findInOrderedSet;
