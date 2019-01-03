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
    let bracesArr = [];
    
    for(let i = 0; i <input.length; i++){
        if(input[i] === '(' || input[i] === '[' || input === '{'){
            bracesArr.push(input[i]);
        }else if(input[i] === ')'){
            if(bracesArr[bracesArr.length-1] === '('){bracesArr.pop();}
        }else if(input[i] === ']'){
            if(bracesArr[bracesArr.length-1] === '['){bracesArr.pop();}
        }else if(input[i] === '}'){
            if(bracesArr[bracesArr.length-1] === '{'){bracesArr.pop();}
        }
    }
    return (bracesArr.length === 0);
}

module.exports = balancedParens;
