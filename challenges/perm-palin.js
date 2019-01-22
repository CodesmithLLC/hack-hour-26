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

// if there is a match for every letter OR there is only one left over, return true; otherwise return false

function permPalin(str) {
  // if one letter return true
  if (str.length === 1) return true;
  // declare object for checking letter count
  const letterCount = {};
  // loop through string and count each letter
  for (let i = 0; i < str.length; i += 1) {
    if (!letterCount.hasOwnProperty(str[i])) {
      letterCount[str[i]] = 1;
    } else {
      letterCount[str[i]]++
    }
  };
  // console.log(Object.values(letterCount));
  const letterCountString = Object.values(letterCount);
  // console.log(letterCountString)
  const doubleOnes = [];
  // console.log('letterCountString: ', letterCountString);
  for (let i = 0; i < letterCountString.length; i += 1) {
    if (doubleOnes.length >= 2) {
      return false;
    }  
    if (letterCountString[i] === 1) {
      console.log(doubleOnes);
      doubleOnes.push(i);
    }
  }
  return true;
};


console.log(permPalin('abab')) // => true
console.log(permPalin('cbaba')) // => true
console.log(permPalin('cbac')) // => false
console.log(permPalin('a')) // => true

module.exports = permPalin;
// SO CLOSE!