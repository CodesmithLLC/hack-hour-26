/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  const set = new Set();
  for (let i = 0; i < array.length; i += 1) {
    if (set.has(array[i])) {
      set.delete(array[i]);
    } else {
      set.add(array[i]);
    }
  }
  if (set.size) {
    return set.values();
  }
  return false;
}

module.exports = uniqueNumber;

console.log(uniqueNumber([1, 2, 3, 1, 3]));
