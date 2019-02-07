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

// * O(n) GO THROUGH AND ADD EACH NUMBER TO AN OBJECT AS A KEY AND NUMBER OF OCCURANCES AS A VALUE

// ! O(n) SPACE COMPLEXITY
// function repeatNumbers(array) {
//   // CHECK TYPE OF INPUT
//   if (Array.isArray(array) === false) return undefined;
//   // CREATE NEW EMPTY OBJECT
//   const numberCountObj = {};
//   // LOOP OVER ARRAY CHECKING CURR ELEMENT EXISTS IN OBJ AS KEY, IF SO INCREMENT VALUE BY 1
//   // ELSE ADD IT AS A KEY TO THE OBJECT
//   array.forEach(element => {
//     numberCountObj[element]
//       ? (numberCountObj[element] += 1)
//       : (numberCountObj[element] = 1);
//   });
//   // LOOP THROUGH OBJECT CHECKING IF VALUE > 1, RETURN THAT NUMBER
//   const numberCountArr = Object.entries(numberCountObj);
//   let appearedTwice;
//   numberCountArr.forEach(element => {
//     if (element[1] === 2) appearedTwice = element[0];
//   });

//   return appearedTwice;
// }

// ! O(n) SPACE COMPLEXITY
function repeatNumbers(array) {
  if (Array.isArray(array) === false) return undefined;
  array.sort((a, b) => a - b);
  let appearedTwice;
  array.forEach((el, i) => {
    if (el == array[i + 1]) appearedTwice = el;
  });
  return appearedTwice;
}

console.log(repeatNumbers([1, 2, 3, 4, 5, 6, 5]));

module.exports = repeatNumbers;
