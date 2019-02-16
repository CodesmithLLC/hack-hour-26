/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example:
 * var result = anagrams('abc');
 * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

function anagrams(string) {
  // ? Multiply string length by 2 to determine number of posibilites
  let numberOfPossibilities = 2 * string.length;
  // ? Create an output arr
  let output = [];
  // ? Push original string onto output as first anagram
  output.push(string);
  // ? Loop numberOfPossibilities times and rearange string into anagrams
  for (let i = 0; i < numberOfPossibilities; i++) {
    if (i % 2 === 0) {
    } // reverse last two chars and push into output
    // if i is odd, rotate string by one and push into output
  }
}

module.exports = anagrams;
