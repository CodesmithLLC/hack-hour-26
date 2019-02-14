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
  const letters = string.split('');
  const grams = new Set();

  function buildAnagrams(lettersArr, str = '') {
    if (lettersArr.length === 0) return grams.add(str);

    lettersArr.forEach((letter, i) => {
      // copy array, remove current letter from copy
      const nextArr = lettersArr.slice();
      nextArr.splice(i, 1);

      // add current letter to string
      const nextStr = str + letter;
      return buildAnagrams(nextArr, nextStr);
    });
  }

  buildAnagrams(letters);

  return Array.from(grams);
}

module.exports = anagrams;
