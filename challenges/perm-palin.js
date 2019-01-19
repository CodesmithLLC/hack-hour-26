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
    let oddcount = 0;
    const strObj = {};
    for(let i= 0; i < str.length; i++){
      strObj[str[i]] = (!strObj[str[i]]) ? 1 : strObj[str[i]] +=1;
    }
    let countArr = Object.values(strObj);
    for(let i = 0; i < countArr.length; i++){
        if(countArr[i] % 2 !== 0){
            oddcount += 1;
        }
    }
    return (oddcount > 1) ? false : true;

	
}

module.exports = permPalin;