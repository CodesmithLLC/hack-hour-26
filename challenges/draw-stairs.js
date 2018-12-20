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
    if(n < 1) return "";
    let numAsterisk = 1; //keeps track of the num of asterisks needs to be printed
    while(numAsterisk <= n){
        let print = "";
        //add n-#asterisk spaces, except if the numAsterisk = n
        if(numAsterisk != n){
            for(let i = 0; i < (n-numAsterisk); i++){
                print = print.concat(" ");
            }
        }
        //add numAsterisks
        for(let j = 0; j < numAsterisk; j++ ){
            print = print.concat("*");
        }
        console.log(print);
        numAsterisk++;
    }
}

module.exports = drawStairs;
