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
  let numberOfSpaces = n - 1; // number of initial spaces before first stair
  let stair = '*'; // initial number of stairs to print
  let space = ' '; // var to store spaces
  for (let i = 0; i < n; i++) {
    // outer loop loops n number of times (height and width of staircase)
    let stairCase = ''; // initialize a new empty level of stairs
    for (let j = 0; j < numberOfSpaces; j++) {
      // loop to print correct number of spaces
      stairCase += space; // adds spaces to staircase string
    }
    numberOfSpaces -= 1; // after adding spaces, decrement number of spaces to add by 1
    stairCase += stair; // add a stair to stairCase string
    stair += '*'; // increment number of stairs to add in next loop by 1
    console.log(stairCase); // log current level of stairs
  }
}

drawStairs(6);

module.exports = drawStairs;
