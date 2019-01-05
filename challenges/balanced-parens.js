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

// function balancedParens(input){
//     // make a cache of bracket types, setting initially to return true for closed.
//     const cache = { 
//         '{': true,
//         '[': true,
//         '(': true,
//         };
//     // loop over the string, looking for bracket types
//     input.split('').forEach((char) => {
//         // if bracket type is found and currently closed, then change to not closed
//         if (cache[char]) {
//             cache[char] = false;
//         }
//         // if a closing bracket, check to see if it isn't closed
//         // if it is not closed, then change to closed
//         switch(char) {
//             case ')':
//                 if (cache['('] === false) cache['('] = true;
//                 break;
//             case ']':
//                 if (cache['['] === false) cache['['] = true;
//                 break;
//             case '}':
//                 if (cache['{'] === false) cache['{'] = true;
//                 break;
//         }
//     });

//     // after the string, if bracket types are equal.
//     // if they are ever not, then return false
//     if (cache['{'] === false) return false;
//     if (cache['('] === false) return false;
//     if (cache['['] === false) return false;
//     // otherwise return true
//     return true;
// }
const open = ['(', '{', '['];
const match = {
    '}': '{',
    ']': '[',
    ')': '(',
}
function balancedParens(input, brackets=[]) {
    if (input.length === 0) {
        if (brackets.length === 0) return true;
        return false;
    }
    const char = input.slice(0,1);
    const newInput = input.slice(1);
    if (open.includes(char)) brackets.push(char);
    if (match[char] && brackets.pop() !== match[char]) {
        return false;
    }
    return balancedParens(newInput, brackets);
}



// console.log(balancedParens('('));  // false
// console.log(balancedParens('()')); // true
// console.log(balancedParens(')('));  // false
// console.log(balancedParens('(())'));  // true

// console.log('++++++++++++')

// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]'));   // true
// console.log(balancedParens('[(]{)}')); // false

// console.log('++++++++++++')

// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false

module.exports = balancedParens;
