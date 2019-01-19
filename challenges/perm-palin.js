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
  const charCount = {};
  
  let charArray = str.split('');


  for(let i =0; i<charArray.length; i++) {
    if(charCount[charArray[i]]) {
      charCount[charArray[i]] += 1;
    }

    else {
      charCount[charArray[i]] = 1;
    }

  }

  const entries = Object.entries(charCount);

  let pivot = 0;

  for(let j=0; j<entries.length; j++ ) {
    console.log(entries[j][1])
    if(entries[j][1] % 2){
      pivot += 1;
    }
  }

  if(pivot > 1) {
    return false;
  }

  return true;


}


module.exports = permPalin;