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
    let output = '';
    for (let i = 0; i < n; i++) {
        let newRow = '';
        // for spaces
        for (let j = n; j > i; j--){
            newRow += ' ';
        }
        // for *
        for (let k = 0; k <= i; k++){
            newRow += '*';
        }

        output += newRow;
        output += '\n';
        // console.log(newRow);
    }
    return output;
} 

console.log(drawStairs(5));
// console.log(drawStairs(6));

module.exports = drawStairs;
