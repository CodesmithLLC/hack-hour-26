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
  if (s1.length !== s2.length) return false;
  if (typeof s1 !== 'string' || typeof s2 !== 'string') return false;
  let rot = s2;
  let counter = 0;
  // while counter is less than length of the string
  while (counter < s1.length) {
    // check if s1 is a substring of s2
    if (isSubstring(s1, rot)) {
      // return true
      return true;
    }
    // otherwise, make new string rot
    rot = rot.slice(rot.length - 1) + rot.slice(0, rot.length - 1);
    // increment counter by 1
    counter++;
  }
  // otherwise, return false;
  return false;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
