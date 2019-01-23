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
  return isSubstring(s1+s1, s2);
}

let s1 = "hello";
let s2 = "hello";
let s3 = "llohe";
let s4 = "lloeh";
let s5 = "helloh";
console.log(stringRotation(s1, s2));
console.log(stringRotation(s1, s3));
console.log(stringRotation(s1, s4));
console.log(stringRotation(s1, s5));



// So below I was trying to physically rotate the string so that the first element
// of the second string would be in the same position as the first element in the first string...
// I was also trying to account for any words with two of the first element (for example ReveRse),
// where the second r in reverse could be identified first, making the rest of the letters not
// align even if the word was identical (would compare rsereve). This led me down a nested
// conditional rabbit hole that I could have possibly resolved with a loop... Anyway the hack
// hour solution made much more sense and was far simpler.

// function stringRotation(s1, s2) {
//   // check to see if the length of the two strings is the same; if not, return false;
//   if (s1.length !== s2.length) return false;
//   // create temp array to hold moving items
//   let tempMovingTwo = [];
//   // find first and second elements of first string in the second string
//   for (let i = 0; i < s2.length; i += 1) {
//     if (s2[i] === s1[0]) {
//       if (s2[i] === s2.length) {
//         if (s2[0] === s1[1]) {
//           tempMovingTwo.push(s2[i], s2[0])
//         }
//       }
//     } else if (s2[i] === s1[0] && s2[i += 1] === s1[1]) {
//       tempMovingTwo.push(s2[i], s2[i += 1]);
//     } else {
//       return false;
//     }
//   }
//   for (let i = 0; i < s2.length; i += 1) {
//     if (s2[i] === tempMovingTwo[0]) {
//       s2.unshift(tempMovingTwo[0])
//     }
//   }
//   // then move all elements left until it's also the first element of the second string

//   // call isSubstring on both strings
//   return isSubstring(s1, s2);
// }

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
// COMPLETED