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

/**
 * I string1, string2
 * O 
 * C do not recurse / only one call to helper fn allowed 
 * E
 */


function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if (s2.length !== s1.length) return false;
  const s2A = [...s2];
  for (let i = s2A.length - 1; i >= 0; i -= 1) {
    s2A.unshift(s2A.pop());
    if (s2A.join('') === s1) return true;
  }
  return false;
}

const isRotated = (s1, s2, i = 0) => {
  if (s1 === s2) return true;
  if (i === s2.length) return false;
  const s2A = [...s2];
  s2A.unshift(s2A.pop());
  return isRotated(s1, s2A.join(''), i + 1);
};

const isRotated = (s1, s2) => {
  const s2A = [...s2];
  let i = 0;
  const rotate = (s1, s2A, i) => {
    s2A.unshift(s2A.pop());
  };
  if (s1 === s2A.join('')) return true;
  if (i === s2.length) return false;
  i += 1;
  return rotate(s1, s2A, i);
};


// const stringRotation = (s1, s2) => {
//   if (s2.length !== s1.length) return false;
//   const s2A = [...s2];
//   const misalignedChars = [];
//   for (let i = 0; i < s2A.length; i += 1) {
//     if (s2A[i] !== s1[i]) {
//       misalignedChars.push(s2A.shift());
//       i -= 1;
//     }
//   }

//   return !![...s2A, ...misalignedChars].join('');
// };

// const stringRotation = (s1, s2) => {
//   if (s2.length !== s1.length) return false;
//   const s2A = [...s2];
//   const subStr = s2A.reduce((arr, char, i) => {
//     if (char !== s1[i]) {
//       arr.push(s2A.shift());
//       i -= 1;
//     }
//     return arr;
//   }, []);

//   return !![...s2A, ...subStr].join('');
// };

// const stringRotation = (s1, s2) => {
//   const s2A = [...s2];
//   return (
//     !![...s2A, ...s2A.reduce((misalignedChars, char, i) => {
//       if (char !== s1[i]) { 
//         misalignedChars.push(s2A.shift()); 
//         i -= 1;
//       }
//       return misalignedChars;
//     }, [])].join('')
//   );
// };

// h e l l o
// e l l o h

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};