//  * You are given an array of integers and a target number. Write a function that returns true if
//  * there is a subset of the array that sums up to the target and returns false otherwise. A subset
//  * can be any size and the elements do not have to appear consecutively in the array.
//  *
//  * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
//  * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
//  * subsetSum([8, 2, 4, 12], 13) -> false
//  * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6


function subsetSum(array, target) {
  // BASE CASE: array length === 1 -> return array[0] === target;
  if (array.length === 1) return array[0] === target;
  // for each element in the array:
  array.forEach((element, ix) => {
    const focus = element;
    const newArr = array.slice(0, ix).concat(array.slice(ix + 1));
    newArr.forEach((item) => {});
  });
  // remove it from array (splice?), assign to focus
  // for each element in the remaining array
  // remove it, add it to focus (sum), compare to target
  // return true?
  // else return subsetSum on (shortened array with sum as arr[0] and target)
}

module.exports = subsetSum;
