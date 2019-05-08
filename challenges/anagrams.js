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
  const result = [string];
  let counter = string.length;
  while (counter) {
    const newString = result[result.length - 1].substring(1) + result[result.length - 1].substring(0, 1);
    console.log(newString);
    if (result.indexOf(newString) === -1) result.push(newString);
    counter -= 1;
  }
  return result;
}

const result = anagrams('abc');
console.log(result);

module.exports = anagrams;
