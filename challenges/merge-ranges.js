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

function mergeRanges(array) {
  // if an end time is greater than the next start time, then merge the two arrays
  // end time is before
  // if end > start
  // edge case: end time encompasses two or more start times.
  // handle edge case end times by comparing end times
  let currentIndex = 0;
  const mergedRange = [];
  while (array[currentIndex]) {
    const currentRange = array[currentIndex];
    for (let i = 0; i < array.length; i += 1 && array[currentIndex][1] < array[i][1]) {
      if (currentRange[1] > array[i][0]) {
        currentRange[1] = array[i][1];
        array.splice(i, i + 1);
      }
    }
    currentIndex += 1;
    mergedRange.push(currentRange);
  }
  return mergedRange;
}

const times = [[0, 3], [4, 9], [5, 7], [8, 10], [11, 12]];
console.log(mergeRanges(times));

module.exports = mergeRanges;
