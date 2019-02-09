/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 * 
 * check if any 
 * 
 * 
 */

function mergeRanges(array) {
  array.sort((a, b) => a[0] - b[0]);
  let i = 0;

  return (function recursiveHelper() {
    if (i === array.length) return array;

    for (let j = 1; j < array.length; j += 1) {
      const next = array[j];
      const curr = array[i];

      if (next[0] > curr[0] && next[0] <= curr[1]) {
        curr[1] = next[1];
        array.splice(j, 1);
      }
      i += 1;
    }

    return recursiveHelper();
  }());
}

// function mergeRanges(array) {
//   // let next = array[0];
//   array.sort((a, b) => a[0] - b[0]);

//   for (let i = 0; i < array.length; i += 1) {
//     for (let j = 0; j < array.length; j += 1) {
//       if (array[j][0] > array[i][0] && array[j][0] <= array[i][1]) {
//         array[i][1] = array[j][1];
//         array.splice(j, 1);
//       }
//     }
//   }

//   return array;
// }

console.log(mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]))

module.exports = mergeRanges;
