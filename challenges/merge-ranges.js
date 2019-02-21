/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array, newArr = [array[0]]) {
  array.sort((a, b) => a[0] - b[0]);
  if (array.length === 0);

  function inner() {
    for (let i = 0; i < array.length; i += 1) {
      if (newArr[newArr.length - 1][1] > array[i][0] && newArr[newArr.length - 1][1] < array[i][1]) {
        newArr.push([newArr[newArr.length - 1][1], array[i][1]]);
      }
    }
  }


}

module.exports = mergeRanges;

const times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];

console.log(mergeRanges(times));
console.log(times); // -> [[0, 1], [3, 8], [9, 12]]
