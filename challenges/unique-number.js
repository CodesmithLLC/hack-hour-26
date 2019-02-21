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
    // loop through the array, pushing into object, then remove key/value from object if there is a match
  storageObj = {};
  for (let i = 0; i < array.length; i++) {
    if (storageObj.array[i]){
      delete storageObj.array[i]
    }
    if (!storageObj.array[i]){
      storageObj.array[i] = storageObj.array[i];
    }
  }
}

module.exports = uniqueNumber;
