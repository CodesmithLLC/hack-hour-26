/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  //loop through the array 
  for (let i = 0; i < arr.length; i++) {
    //in a second loop start at j= i+1, and loop through testing i + j, if that equals the sum, return true
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) === n) return true;
    }
  }      
  //if we exit the loops, return false
  return false;
}

module.exports = twoSum;
