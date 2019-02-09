/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 * 
 * 
 * iterate
 * check if num is greater than last
 * create holder
 * if num is greater than last
 * 
 * 
 * 
 * [4, 1, 2, 3, 4];
 * 
 * iterate till repeat val or end of arr
 * 
 * 4 + 1 + 2 + 3 + 4
 * 
 * 14 / 4 -> 3 % 2
 * 
 * 
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

 // console.log(14 % 4)

function repeatNumbers(array) {
  const sum = array
    .sort((a, b) => a - b)
    .reduce((total, num) => {
      total += num;
      return total;
    });

  let last = sum / array[0];

  let i = 1;
  while (i < array.length) {
    const quotient = sum / array[i];

    if (quotient === last) return array[i];

    last = quotient;
    i += 1;
  }

  return null;
}

console.log(repeatNumbers([1, 2, 3, 4, 5, 5]))


module.exports = repeatNumbers;
