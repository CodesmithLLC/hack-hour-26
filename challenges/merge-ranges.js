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

/* eslint-disable */

// helper function merges two pairs,
// assume that the parent[0] <= child[0] and parent[1] >= child[0]
function mergePairs(parent, child) {
  const merged = [...parent];
  if (child[1] > parent[1]) merged.splice(1, 1, child[1]);
  return merged;
}


function mergeRanges(array) {
  let output = [...array];
  // loop over pairs in array
  output.forEach((pair, i) => {
    let parent = pair
    let a = parent[0];
    let b = parent[1];

    output.forEach((child) => {
      console.log({ parent, child });
      
      if (a <= child[0] && b >= child[0]) {
        console.log('merging!');
        
        const merged = mergePairs([a, b], child);
        a = merged[0];
        b = merged[1];
        parent = merged;
      }
    });

    // it's merging at appropriate times, but the output array isn't updating...
    output= [...output.slice(0, i), parent, ...output.slice(i+1)];
    console.log(`output after splice: ${output}`);
  });

  // for each pair (a, b), loop over all other pairs (x, y)
  // checking to see if x falls between a and b (be inclusive)
  // if yes, merge the pairs using the helper -> (a, b) as the parent
  return output;
}

const times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
const merged = mergeRanges(times);

console.log('[[0, 1], [3, 8], [9, 12]]:', merged);


module.exports = mergeRanges;
