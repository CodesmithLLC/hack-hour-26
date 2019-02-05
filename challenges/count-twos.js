// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  //declare a variable twoCount and set equal to 0
  let twoCount = 0;
  let numString = '';
  //initiate a for loop starting at 0 and increasing until num + 1
  for (let i = 1; i < num + 1; i++) {
    //convert the number to a string
    numString = i.toString();
    //loop through the string 
    for (let j = 0; j < numString + 1; j++) {
      //see if there are any twos, if two
      if (numString[j] === '2') {
      //increment twoCount
      twoCount += 1;
    }
    }
    }
  //return twoCount
  return twoCount;
}

console.log(countTwos(1)) //;  -> 0
console.log(countTwos(3)) //;  -> 1
console.log(countTwos(13)) //;  -> 2
console.log(countTwos(1000)) //;  -> 300
console.log(countTwos(11420)) //; -> 4483


module.exports = countTwos;
