// console.log('draw-stairs!')
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

/**
   I: num
   O: a printout of asterisks (string) arranged in an isosceles triangle where the base is the length in asterisks
   strict equals num and the top (last printout) equals one asterisk
 * 
 * 
 * / */

const drawStairs = (n) => {
  const step = Array(n).fill(' ');
  let i = n;
  while (i >= 0) {
    step.splice(i, 1, '*');
    console.log(step.join(''));
    i -= 1;
  }
};

// drawStairs(16);

// const reduceStairs = (n) => { 
//   const step = Array(n).fill(' ');
//   return step.reduceRight((stairCase, i) => {
//     step.splice(i, 1, '*');
//     stairCase += step.join('') + \n;
//     return stairCase;
//   }, '');
// }


module.exports = drawStairs;
