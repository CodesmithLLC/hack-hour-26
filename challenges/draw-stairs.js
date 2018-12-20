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
    //counter = n
    //spaces = 0
    //print n "*"
    //while loop -- 
    //while (counter > 0) 
    //print spaces + counter "*"
    //counter--
    //

    let counter = 1;
    let spaces = n-1;

    while(counter <= n){
        console.log(" ".repeat(spaces) + "*".repeat(counter))
        counter++
        spaces--
    }

}


module.exports = drawStairs;

drawStairs(6)
