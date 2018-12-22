// Write a function that console logs a staircase of any given height where 1 <= N <= 100.
//  The staircase must climb up from left to right. The last line should only consist of asterisks,
//  without any leading/trailing spaces. 


function drawStairs(n) {
    // the first line will log 5 empty spaces and one asterisk - if n is 6. that's n - 1 empty spaces...
    // ... and 1 asterisks
    // the second line will log 4 empty spaces and two asterisks - that's n - 2 empty spaces and...
    // ... and 2 asterisks
    // loop from 1 to n and log white spaces (n - i) amount of times and log an asterisk i amount of times


    let star = "*";
    let space = "\xa0"; // the utf code for a NO-BREAK SPACE
  	
    for (let i = 1; i <= n; i += 1){
        console.log(space.repeat(n-i) + star.repeat(i));
    }

}

// Test your function
 drawStairs(6); 

/* should log ->          
     *
    **
   ***
  ****
 *****
******

*/


module.exports = drawStairs;
