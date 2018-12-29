/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/
function drawStairs(n) {
//use a for loop starting at 1 and stopping when i < n + 1
for (let i = 1; i < n + 1; i++) {
  //declare a variable string and set it equal to an empty string 
  let tempString = "";
  //use a second for loop starting at 1, and ending at n - i
  for (let j = 1; j < n - i; j++) {
       //add a space to tempString
       tempString += " ";
    }
   //use a third for loop starting at 1, and ending at i
   for (let k = 1; k < i + 1; k++) {
       //add an asterisk to tempString
       tempString += "*";
    }
   //log temp String to the conosle
   console.log(tempString);
}
}

function drawStairs(n) {
   for (let i = 0; i < n; i++) {
      const spaces = " ".repeat(n-i);
      const stars = "*".repeat(i);
      console.log(spaces + stars);
   }
}





module.exports = drawStairs;
