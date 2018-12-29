/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

// ? I'm not sure if I understand the goal of calling isSubstring only once...

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function rotate(string) {
  newString = string.slice(1);
  return newString + string[0];
}

function stringRotation(s1, s2) {
  // strings need to be the same length and of type string
  if (typeof s1 !== 'string' || typeof s2 !== 'string') return false;
  if (s1.length !== s2.length) return false;
  if (s1.length === 0 && s2.length === 0) return true;

  let counter = 0;
  let rotating = s2;
  while (counter < s1.length) {
    if (s1 === rotating) return isSubstring(s1, rotating);
    // if (s1 === rotating) return true;
    rotating = rotate(rotating);
    counter += 1;
  }
  return false;
}

module.exports = { isSubstring, stringRotation };

// * TESTING * //

// console.log(`typeof '' ${typeof ''}`);
// console.log(`'' & '' -> true : ${stringRotation('', '')}`);
// console.log(`' ' & ' ' -> true : ${stringRotation(' ', ' ')}`);
// console.log(`'1' & '12' -> false : ${stringRotation('1', '12')}`);
// console.log(`'1234' & '4123' -> true : ${stringRotation('123', '312')}`);
// console.log(`'1234' & '2341' -> true : ${stringRotation('123', '312')}`);
// console.log(`'1234' & '' -> false : ${stringRotation('1234', '')}`);
// console.log(`[] & '' -> undefined : ${stringRotation([], '')}`);
// console.log(`'yeah boiiii' & 'boiiiiyeah ' -> true : ${stringRotation('', '')}`);
