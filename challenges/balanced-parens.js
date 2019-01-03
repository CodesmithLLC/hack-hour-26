/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
    let parens = '()[]{}';
    let balance = [];
    for (let i = 0; i < input.length; i++) {
        console.log(parens.indexOf(input[i]))  //indexOf returns -1 if not in array or the location of the character in parens.  ;
        if(parens.indexOf(input[i]) !== -1){
            if (input[i] == ')') {
                console.log(input[i])
                for (let j = 0; j < balance.length; j++) {
                    if(balance[j] === '('){
                        balance.splice(j,1);
                    } 
                } 
            }
            else if (input[i] == '}') {
                // console.log(input[i])
                for (let j = 0; j < balance.length; j++) {
                    if(balance[j] === '{'){
                        balance.splice(j,1);
                    } 
                } 
            }
            else if (input[i] == ']') {
                // console.log(input[i])
                for (let j = 0; j < balance.length; j++) {
                    if(balance[j] === '['){
                        balance.splice(j,1);
                    } 
                } 
            } else {
                balance.push(input[i]);

            }
    }
    }
    console.log(balance);
    if (balance.length === 0) return true;
    else return false;

}
console.log(balancedParens('hel{(){}{{}}[]}}lo'));


module.exports = balancedParens;