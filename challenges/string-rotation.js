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
  // rotate is to change the starting position to a spot and the order of letters is still correct
  // base cases: needs the same amount of characters
  if (s1.length !== s2.length) return false;
  
  let firstLetter = s1[0];
  let firstSlice;
  let secondSlice;
  console.log(firstLetter);
  
  for (let i = 0; i < s2.length; i++) {   
    if (firstLetter === s2[i]){
      firstSlice = s2.slice(i);   //slicing from the first character to end of string
      secondSlice = s2.slice(0,i); // slice from beggining of string to first character;
    }
  }
  if(isSubstring(s1,firstSlice) && isSubstring(s1,secondSlice)) return true;
  // if (firstSlice+secondSlice === s1) return true;
  return false
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

console.log(isSubstring("hello",'llo'));
console.log(stringRotation('hello','llohe'))
console.log(stringRotation('hello', 'ollhe'))