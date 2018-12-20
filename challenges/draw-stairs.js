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
  if (typeof n !== 'number' || n < 1 || n > 100) console.log('Please enter a number between 1 and 100');

  // we want to output stairs,
  // starting with n-1 spaces and 1 asterisk
  // and we want to log level from top to bottom
  // until there are no spaces,
  // and n asterisks on the base level

  // continue adding layers until numStars > n;
  for (let numStars = 1; numStars <= n; numStars += 1) {
    // loop to build a layer -> n - numStars spaces + numStars stars
    console.log(' '.repeat(n - numStars) + '*'.repeat(numStars));
  }
}

// console.log('drawStairs(0)\n', drawStairs(0));
// console.log('drawStairs(1)\n', drawStairs(1));
// console.log('drawStairs(6)\n', drawStairs(6));
// console.log('drawStairs(100)\n', drawStairs(100));


module.exports = drawStairs;
