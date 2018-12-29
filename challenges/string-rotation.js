/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
*/

// The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

function stringRotation(s1, s2) {
  // I want to turn s2 into a series of strings "llohe, lohel, ohell, hello, elloh"
  // ... and then check to see if s1 is in s2
  let temp = "";
  for (let i = 0; i < s2.length; i +=1){
  	temp += s2.slice(i) + s2.slice(0,(i)) + ","
  }
	s2 = temp 
  return isSubstring(s2,s1)

}


function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}


console.log(stringRotation("hello", "hello")) // -> true
console.log(stringRotation("hello", "llohe")) // -> true
console.log(stringRotation("hello", "he")) 		// -> false
console.log(stringRotation("hello", "ollhe")) // -> false


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
