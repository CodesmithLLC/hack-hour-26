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
  for (let i = 1; i <= n || i <= 100; i += 1) {
    const spaceString = ' ';
    const astriskString = '*';
    if (n - i > -1) {
      console.log(spaceString.repeat(n - i) + astriskString.repeat(i));
    } else return;
  }
}

module.exports = drawStairs;
