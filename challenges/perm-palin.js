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
    for (let i = 0; i < str.length; i++) {
        wrkObj[str[i]] ? delete wrkObj[str[i]] : wrkObj[str[i]] = 1;
    }

    return Object.keys(wrkObj).length <= 1 ? true : false;
}


module.exports = permPalin;