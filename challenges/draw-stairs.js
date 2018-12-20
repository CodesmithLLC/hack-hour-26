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
//expected result is a staircase with vertical height = n and horizontal steps = n
//each vertical step will also extend step to left by n 
//strategy: 
  //use 2 nested for loops to iterate, initializing at 1 and stopping when i < n
  //first loop will be for vertical 
  //second for loop will be for horizontal to add to left  
  //before breaking out of second for loop, console log result
  //when i === n console log a line of asterisks
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {  
      console.log('*', '*')//j at i number of times and to the left); 
      }
      if (i === null) {
          console.log() //how to write code to print * i number of times; 
      }
  }
}


module.exports = drawStairs;
