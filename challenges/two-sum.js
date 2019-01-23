/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */
/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

// let array = [1,24,5,6,7,4,3]
// function twoSum(arr, n) {
//   for(let i = 0; i < arr.length; i++) {

//     for(let j = 0; j < arr.length; j++) {
//       if(arr[i] + arr[j] === n) {
//         return true
//       }
//     }
//   }
//   return false
// }

// twoSum(array, 23)

/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

let array = [1, 24, 5, 6, 7, 4, 3];
function twoSum(arr, n) {
  let temp = arr[0];
  let i = 1;

  while (arr.length > 1) {
    if (temp + arr[arr.length - i] === n) {
      return true;
    }
    i++;

    if (arr[arr.length - i] === undefined) {
      console.log("gotot");
      i = 1;
      arr.splice(1);
    }
  }

  return false;
}

twoSum(array, 4);
module.exports = twoSum;
