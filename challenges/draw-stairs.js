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
    // while(numAsterisk <= n){
    //     let print = "";
    //     //add n-#asterisk spaces, except if the numAsterisk = n
    //     if(numAsterisk != n){
    //         for(let i = 0; i < (n-numAsterisk); i++){
    //             print = print.concat(" ");
    //         }
    //     }
    //     //add numAsterisks
    //     for(let j = 0; j < numAsterisk; j++ ){
    //         print = print.concat("*");
    //     }
    //     console.log(print);
    //     numAsterisk++;
    // }
    test(numAsterisk, n);
}

function test(numAst, n){
    if(numAst > n) return;
    let print;
    let txt ="";
    if(numAst < n){
        print = new Array(n-numAst);
        txt = print.join(" ");
    } else{
        console.log("ast " + numAst + " n " + n);
        console.log(txt);
    }
    
    for(let i = 0; i < numAst; i++){
        txt = txt.concat("*");
    }
    console.log(txt);
    test(numAst+1, n);
}

drawStairs(100);

module.exports = drawStairs;
