/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

 /**
  * I: (arr of nums, target num)
  * O: boolean -> do any values in target array equal target when added together?
  * C: subset can be of any size and values do not have to be consecutive
  * E: 
  * 
  * @param {} array 
  * @param {*} target 
  */

// const subsetSum = (arr, target) => {
//   if (arr.length === 0) return false;
//   let first = arr[0];
//   let flag = false;
//   arr.shift();
//   arr.reduce((sum, num, i) => {
//     let nextCombo = first + num;
//     if (nextCombo === target || sum === target) flag = true; 
//     return sum += num;
//   }, arr[0]); 
//   return flag || subsetSum(arr, target);
// }

const subsetSum = (arr, target) => {
  let sum = arr[0];
  let j = 1;
  while (j < arr.length) {
    const nextCombo = arr[0] + arr[j];
    sum += arr[j];

    if (nextCombo === target || sum === target) return true;
    j += 1;
  }
  arr.shift();
  return subsetSum(arr, target);
};

// function subsetSum(array, target) {
//   // create sum
//   let sum;
//   // create next
//   let next;
//   // assign to sum the first number in the list
//   for (let i = 0; i < array.length; i += 1) {
//     let sum = array[i] + array[i + 1];
//     if (sum >) {

//     }
//   }
//   // if the result of sum plus next is greater than the target
//     // increment next by one 
//   // if the value of sum plus next is less than the target
//     // set sum to the value of sum plus next
//     // increment next by one
//   // if sum equals target,
//     // return true

//   // if iteration reaches end of arr,

// }

module.exports = subsetSum;
