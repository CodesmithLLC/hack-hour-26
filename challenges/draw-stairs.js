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

    const height = n;
    for(let i=0; i<n; i++){

        let str = '';

        for(let k =n -i; k>=0; k--){
            str += ' ';
        }

        for(let j=0; j<i; j++){
            str += '*';
        }

        console.log(str);
    }

}

module.exports = drawStairs;
