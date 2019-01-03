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

 function onlySpecialChar (str) {
    let specialStr = [];
    let searchStr = "()[]{}"

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (searchStr.includes(char)) {
            specialStr.push(char);
        }
    }
    return specialStr;
 }

function balancedParens(input){
    let specialCharArr = onlySpecialChar(input);
    let searchStr = "()[]{}"
    let obj = {};

    if (specialCharArr.length % 2 != 0) {
        return false;
    }

    for (let i = 0; i < specialCharArr.length; i++) {
        //specialCharArr[i] is a special char
            let key = specialCharArr[i];
            
            // if closing char, then opening char should be in obj, if not return false
            if (key === ")" && !obj['(']) {
                return false;
            } 
            if (key === "]" && !obj['[']) {
                return false;
            } 
            if (key === "}" && !obj['{']) {
                return false;
            } 
            // if closing char, and opening char in obj, then delete opening char
            if (key === ")" && obj['(']) {
                if (obj['('] === 1) {
                    delete obj['(']
                }
                obj['('] -= 1
                
            } 
            if (key === "]" && obj['[']) {
                if (obj['['] === 1) {
                    delete obj['[']
                }
                obj['['] -= 1
            } 
            if (key === "}" && obj['{']) {
                if (obj['{'] === 1) {
                    delete obj['{']
                }
                obj['{'] -= 1
            } 
            // else if opening char, then add to obj
            if (obj[key]) {
                obj[key]++
            }
            else {
                obj[key] = 1;
            }
    }
    return true
}

// console.log(balancedParens('(())'))
// console.log(balancedParens('[({})]'))
// console.log(balancedParens('[](){}'))
console.log(balancedParens('[(]{)}'))
module.exports = balancedParens;
