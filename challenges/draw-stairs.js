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
  // intialize a str
  let stairs = '';
  for (let i = 1; i <= n; i += 1) {
    let step = '';
    for (let j = 1; j <= n; j += 1) {
      if (n - j >= i) {
        step += ' ';
      } else {
        step += '*';
      }
    }
    if (i <= n) {
      step += '\n';
      stairs += step;
    }
  }
  return stairs;
}


module.exports = drawStairs;
