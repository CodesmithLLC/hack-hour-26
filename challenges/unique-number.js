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
  // * Check for valid input
  if (!Array.isArray(array)) return undefined;
  // * Create an object to store elements as keys and occurances as values
  const elementCounter = {};
  // * Loop through array adding elements to elementCounter
  for (let elem of array) {
    if (!elementCounter[elem]) {
      elementCounter[elem] = 1;
    } else {
      elementCounter[elem] += 1;
    }
  }

  // * Loop over object, return key whose value is equal to 1
  const numbersArr = Object.entries(elementCounter);

  for (let i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i][1] === 1) return numbersArr[i][0];
  }
}

console.log(uniqueNumber([1, 2, 1, 3, 3]));

module.exports = uniqueNumber;
