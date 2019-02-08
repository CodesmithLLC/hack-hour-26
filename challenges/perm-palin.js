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
    if (str.length === 1) return true;
    const wrkObj = {};
    str.split('').forEach(letter => wrkObj[letter] ? wrkObj[letter] += 1 : wrkObj[letter] = 1);

    return wrkObj;
}

console.log(permPalin('cbaba'));

module.exports = permPalin;