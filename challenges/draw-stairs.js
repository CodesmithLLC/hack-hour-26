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
  let stair;
  for (let i = n - 1; i >= 0; i--) {
    stair = '';
    for (let s = 0; s <= n - 1; s++) {
      if (i > s) {
        stair += ' ';
      } else {
        stair += '*';
      }
    }
    console.log(stair);
  }
}

drawStairs(6);

module.exports = drawStairs;
