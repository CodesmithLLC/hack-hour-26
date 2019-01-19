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
  if (str.length < 2) return true;
  const obj = {};
  let pp = false;
  let odd = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (!obj[str.charAt(i)]) {
      obj[str.charAt(i)] = 1;
    } else {
      obj[str.charAt(i)] += 1;
    }
  }

  Object.values(obj).forEach((count) => {
    if (count % 2 === 0) {
      pp = true;
    } else {
      odd += 1;
    }
  });
  if (pp === true && ((odd % 2 === 1) || odd === 0)) return pp;
  return false;
}

module.exports = permPalin;

// console.log(permPalin('abab'));
// console.log(permPalin('cabab'));
// console.log(permPalin('cbac'));
// console.log(permPalin('a'));
