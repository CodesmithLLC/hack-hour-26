/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */
 
 // 7, 4, 3, 11, 2
 // 7 + 2 no
 // 7 + 3 no
 // 7 + 4 no
 // 3 + 2 no
 // 

// iterate through arr
  // create a holding var set equal to arr[0]
  // if holding plus arr i equals target 
    // return true
  // splice 

// return false
function twoSum(arr, n) {
  if (arr.length === 1) return false;
  const last = arr.pop();
  for (let i = 0; i < arr.length; i += 1) {
    if (last + arr[i] === n) return true;
  }

  return twoSum(arr, n);
}

module.exports = twoSum;
