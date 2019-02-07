/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {

  let expectedSum = 0;
  let realSum =0;



  for(let i =0; i<array.length; i++){

    expectedSum += i;
    realSum = realSum + array[i]

  }

  // console.log('expectedSum:',expectedSum,'realSum:',realSum)

  return realSum - expectedSum;

}

// console.log(repeatNumbers([1,2,3,4,5,6,6,7]));

module.exports = repeatNumbers;
