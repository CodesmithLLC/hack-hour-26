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

// ? FIRST SORT ALL RANGES

// ? LOOP OVER RANGES AND CHECK TO SEE IF THERE IS OVERLAP BETWEEN CURRENT RANGE AND NEXT RANGE

// ? IF THERE IS, PUSH THE OUTER VALUES OF THE RANGE INTO A NEW ARRAY, PUSH THAT ARRAY ONTO ANOTHER ARRAY

// ? RETURN ARR

function mergeRanges(array) {
  // Check for valid input
  if (!Array.isArray(array)) return undefined;
  // Sort array by first value in subarray
  const sortedArray = array.sort((a, b) => a[0] > b[0]);
  // Create results arr and push first sorted sub array on
  const result = [];
  result.push(sortedArray[0]);
  // Loop over sortedArr and check if there is overlap between current arr and next arr
  for (let i = 1; i < sortedArray.length; i++) {
    if (
      result[result.length - 1][1] >= sortedArray[i][0] &&
      result[result.length - 1][1] <= sortedArray[i][1]
    ) {
      result[result.length - 1][1] = sortedArray[i][1];
      continue;
    }
    if (
      sortedArray[i][0] > result[result.length - 1][0] &&
      sortedArray[i][1] < result[result.length - 1][1]
    ) {
      continue;
    } else {
      result.push(sortedArray[i]);
    }
  }
  return result;
}

let times = [[0, 1], [3, 5], [4, 8], [5, 7], [10, 12], [9, 10]];
console.log(mergeRanges(times));
module.exports = mergeRanges;
