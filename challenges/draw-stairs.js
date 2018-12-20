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
   O: a printout of asterisks (string) arranged in an isoseles triangle where the base is the length in asterisks
   strict equals num and the top (last printout) equals one asterisk
 * 
 * 
 * / */


 function drawStairs(n) {
    // iterate
    //Array()
    let step = Array(7).fill(' ');
    //console.log(step.length)
    for (let i = step[step.length - 1]; i > 0; i -= 1) {
      step.pop();
      step.push('*')
      console.log(step.join(''))
    }
    
      // init var at 1
      // stop condition < equal to n
      // increment var
   // ea iteration, add 1
  
   //
  }


module.exports = drawStairs;
