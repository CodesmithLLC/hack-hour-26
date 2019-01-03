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
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' let wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' let hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
    // accept an input that is a string of text
    // check to see if the parenthesis are balanced
    // if a ( exists... check to see if their is a matching )... do that for the entire string
    let newString = "";
    for (let i = 0; i < input.length; i += 1){
        if (input[i] === "(" || 
            input[i] === ")" || 
            input[i] === "(" || 
            input[i] === "[" || 
            input[i] === "]" ||
            input[i] === "{" ||
            input[i] === "}"
        ){
            newString += input[i];
        }
    }
}

// Test your code
console.log("string is: ", balancedParens( '[](){}' ) ); // true
console.log("hello");


module.exports = balancedParens;
