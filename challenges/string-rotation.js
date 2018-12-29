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

// function stringRotation(s1, s2) {
//   // edge case
//   if (typeof s1 !== 'string' && typeof s2 !== 'string') return undefined;
//   if (s1.length !== s2.length) return false;
//   // find the index where the first char of string one is in string two
//   let firstLI = s2.indexOf(s1[0]);
//   // slice from beginning letter of s1, found in s2
//   let newStr = s2.substring(firstLI);
//   // append the rest of s2 to new str
//   if (firstLI !== 0) {
//     newStr += s2.substring(0, firstLI);
//   }
//   // make a call to isSubstring
//   return isSubstring(s1, newStr);
// }
function stringRotation(s1, s2) {
  // edge case
  if (typeof s1 !== 'string' && typeof s2 !== 'string') return undefined;
  if (s1.length !== s2.length) return false;
  return isSubstring(s1 + s1, s2);
}

console.log(stringRotation('hello', 'elloh'));

module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };
