/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // iterate through array
  const pairingArray = []
  for (let i = 0; i < arr.length; i += 1) {
    // check the pairing array at each iteration in case array[i] is a match there
    if (pairingArray.includes(arr[i])) {
      return true;
    } else {
      // calculate the opposing number to be equal to target, then push that number into pairing array
      pairingArray.push(n-arr[i]);
    }
  }
  // otherwise return false
  return false;
}


const nums = [3, 1, 5, 8, 3, 9];
console.log(twoSum(nums, 14));
console.log(twoSum(nums, 15));


module.exports = twoSum;
