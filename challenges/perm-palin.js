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

const getOddPropertyVals = obj => Object.values(obj).filter(n => n % 2 === 1);

const permPalin = (str) => {
  const charCounts = [...str].reduce((memo, char) => {
    if (memo[char]) {
      memo[char] += 1;
    } else {
      memo[char] = 1;
    }

    return memo;
  }, {});

  return getOddPropertyVals(charCounts).length < 2;
};

module.exports = permPalin;
