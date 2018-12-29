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
  if (s2.length < s1.length) {
    return false;
  }
  //declare a tempString to store teh value of s1
  let tempS1 = s1;
  //declare tempString set equal to an empty string
  let tempString = "";
  //declare a counter variabl and set = to 1
  let counter = 0;
  //declare a temp variable, index to store our index value
  let index;
  //use an if statement to test if s1.indexOf(s2[counter]) is >= 0;:
  if (s1.indexOf(s2[counter]) < 0) {
        //if so, return false
        return false;
        //else
      } else {
        //set index =  s1.indexOf(s2[0])
        index = s1.indexOf(s2[counter]);
        //add s2[0] to tempString
        tempString += s2[counter];
      }
  //use a while loop until counter < s2.length
  while (counter < s2.length - 1) {
    //increment index
    index +=1;
    //use an if statement to test if s1[index] === undefined
    if (s1[index] === undefined) {
      //if so, set index = 0
      index = 0;
    } 
    //increment counter
    counter += 1;
   // console.log(counter);
    //use an if statement to test if (s2[counter] !== s1[index])
    if (s2[counter] !== s1[index]) {
      //console.log("s2[counter]: ", s2[counter]);
      //if not, return false
      return false;
    }
    //add s2[counter] to temp string
    tempString += s2[counter]
  }
  //set s1 = temp String
  s1 = tempString;
  //set momentOfTruth variable equal to calling return isSubstring on tempString and s2
  let momentOfTruth = isSubstring(s1, s2);
  //set s1 back to tempS1
  s1 = tempS1;
  //return momentOf Truth
  return momentOfTruth;
}



module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
