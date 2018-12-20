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
    let stairs = '';
    let i = n;
    for(n; n > 0; n--){
        stairs += ' '.repeat(n-1)+'*'.repeat(i-n+1);
        if(n !== 1){
            stairs += '\n';
        }
    }
    return stairs;

}


module.exports = drawStairs;

