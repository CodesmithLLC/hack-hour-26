/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

// function permPalin(str) {
//   // split string into array of chars and sort
//   const letters = str.split('').sort();

//   // whether we found a single character yet;
//   const expectSingle = (letters.length % 2 === 1);
//   let singleFound = false;

//   for (let i = 0; i < letters.length; i += 2) {
//     if (letters[i] !== letters[i + 1]) {
//       // expected a single odd letter, but we already found one
//       if (expectSingle && singleFound) return false;

//       // expecting to see a single odd letter, but haven't seen it;
//       if (expectSingle && singleFound === false) {
//         // if either match the next letter to be compared
//         // flip the flag, increment i by 1. (or 3?)
//         if (letters[i] === letters[i + 2] || letters[i + 1] === letters[i + 2]) {
//           singleFound = true;
//           i += 1;
//         }
//       }
//     }
//   }

//   return true;
// }


const permPalin = (string) => {
  if (typeof string !== 'string') return false;
  const letters = string.split('');
  const counts = {};
  let singleFound = false;
  let isPermPalin = true;


  letters.forEach((letter) => {
    // initialize a value if it doesn't exist
    if (!counts[letter]) counts[letter] = 0;
    // increment total count for that letter
    counts[letter] += 1;
  });

  Object.keys(counts).forEach((letter) => {
    if (counts[letter] % 2 === 1 && singleFound) isPermPalin = false;
    if (counts[letter] % 2 === 1 && !singleFound) singleFound = true;
  });

  // made it through all tests!
  return isPermPalin;
};


module.exports = permPalin;
