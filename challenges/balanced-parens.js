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

function balancedParens(input) {
    let square = 0;
    let paren = 0;
    let curly = 0;
    let counter = 0;
    let balanced = true
    input.split('').forEach((char) => {
        if (char === '[') {
            counter += 1;
            square = counter;
        } else if (char === ']') {
            if (counter !== square) {
                balanced = false;
            }
            counter -= 1;
            square = counter
        } else if (char === '(') {
            counter += 5;
            paren = counter;
        } else if (char === ')') {
            if (counter !== paren) {
                balanced = false;
            }
            counter -= 5;
            paren = counter;
        } else if (char === '{') {
            counter += 12;
            curly = counter;
        } else if (char === '}') {
            if (counter !== curly) {
                balanced = false;
            }
            counter -= 12;
            curly = counter;
        }
    });
    return balanced && counter === 0 ? true : false;
}

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false

module.exports = balancedParens;
