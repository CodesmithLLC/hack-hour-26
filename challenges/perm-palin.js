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

function permPalin(str) {
  // * INITIALIZE COUNTER TO BE LENGTH OF STR
  let counter = 0;
  console.log(counter);
  // * REVERSE STR AND COMPARE TO INPUT PARAM
  let reversedStr = str
    .split('')
    .reverse()
    .join('');
  // * IF ALL PERMUTATIONS HAVE BEEN CALCULATED RETURN FALSE
  if (counter === str.length) return false;
  if (reversedStr === str) return true;
  // * ROTATE STRING BY ONE CHARACTER
  let strArr = str.split('');
  let poppedChar = strArr.pop();
  strArr.unshift(poppedChar);
  str = strArr.join('');
  // * PASS ROTATED STRING IN
  permPalin(str, (counter += 1));
}

console.log(permPalin('cbaba'));

module.exports = permPalin;
