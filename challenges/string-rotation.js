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

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if (!s1 && s2.length > 0) {
    return false;
  } else if (!s2 && s1.length > 0) {
    return false;
  }
  let j = 0;
  let s1Char = s1[j];

  let halfOne = ''
  let halfTwo = ''

  for (let i = 0; i < s2.length; i++) {
    if (s2[i] === s1Char) {
      halfTwo += s2[i];
      j++
      s1Char = s1[j]
    } else {
      halfOne += s2[i]
    }
  }

  let concatAndReversed = [halfTwo].concat([halfOne]).join('');

  return isSubstring(s1, concatAndReversed)
}

// find same char;

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
