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
    // pair up all letters, there can only be one instance of % 2 == 1, or else it fails.
    const obj = {};
    for(let i = 0; i < str.length; i++) {
        if(obj[str[i]]){
            obj[str[i]] ++;
        }
        else{
            obj[str[i]] = 1;
        }
    }
    const values = Object.values(obj);
    let noPairs = [];
    values.forEach(el => {
        if(el%2 === 1) noPairs.push(el);
    })
    if(noPairs.length > 1) return false
    return true;    
}
// console.log(permPalin('abab'))
// console.log(permPalin('cbaba'));
// console.log(permPalin('cbac'));
// console.log(permPalin('a'));

module.exports = permPalin;