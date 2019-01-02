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

let bracketTracker;

function balancedParens(input){
    bracketTracker = [];
    for(let i = 0; i < input.length; i++){
        if(input[i] === '('|| input[i] === '[' || input[i] === '{'){
            bracketTracker.push(input[i]);
        }
        else if(input[i] === ')' || input[i] === ']' || input[i] === '}'){
            checkOpp(input[i]);
        }

    }
    return checkBalanced();
}

function checkOpp(input){
    let endIndex = bracketTracker.length -1;
    switch(input){
        case ')':
            if(bracketTracker[endIndex] === '(') bracketTracker.pop();
            else return false;
            break;
        case ']':
            if(bracketTracker[endIndex] === '[') bracketTracker.pop();
            else return false;
            break;

        case '}':
            if(bracketTracker[endIndex] === '{')bracketTracker.pop();
            else return false;
            break;

        default:
            break;
    }
}



function checkBalanced(){
    let keys = Object.values(bracketTracker);
    // console.log(keys);
    for(let i = 0; i < keys.length; i++){
        if(keys[i].length > 0) return false;
    }
    return true;
}
console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false
module.exports = balancedParens;
