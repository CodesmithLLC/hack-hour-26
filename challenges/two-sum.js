/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

// function twoSum(arr, n) {
//     let hasTwoSum = false
//     arr.forEach((e) => {
//         arr.forEach((tester) => {
//             if (e + tester === n) hasTwoSum = true;
//         });
//     });
//     return hasTwoSum;
// }

// function twoSum(arr, n) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.includes(n - arr[i])) return true;
//     }
//     return false;
// }

function twoSum(arr, n) {
    if (arr.length <= 1) return false;
    if (arr.includes(n - arr.splice(0, 1))) return true;
    return twoSum(arr, n);
}


let a = [10, 5, 12, 17, 18, 4, 2, 5];

console.log(twoSum(a, 9));

module.exports = twoSum;
