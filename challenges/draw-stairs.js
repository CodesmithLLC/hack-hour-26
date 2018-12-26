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
    for (var i = 1; i <= n; i++) {
        console.log(addSpaces(n - i) + addStars(i));
    }
}


function addSpaces(num) {
    let spaces = '';

    for (var i = 0; i < num; i++) {
        spaces += ' ';
    }
    return spaces;
}

function addStars(num) {
    let newStr = '';

    for (var i = 1; i <= num; i++) {
        newStr += '*'
    }
    return newStr;
}

console.log(drawStairs(6))

module.exports = drawStairs;
