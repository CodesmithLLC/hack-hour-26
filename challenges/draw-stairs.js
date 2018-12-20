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
  if (n >= 1 && n <= 100) {
    // loop from one to n
    for (let i = 1; i <= n; i += 1) {
      // log a new line where spaces are repeated n - i times and stars are repeated i times
      console.log(`${' '.repeat(n - i)}${'*'.repeat(i)}`);
    }
  }
  return 'Input needs to be greater than 0 and less than or equal to 100';
}

drawStairs(6);

module.exports = drawStairs;
