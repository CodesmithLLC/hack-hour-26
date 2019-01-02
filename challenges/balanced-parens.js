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

 /**
  * I - string
  * O - boolean -> '()' true / ')' or ')(' false
  * C
  * E
  * 
  * '[({})]'
  *  '[
  *   (()((())))
  * S make new string that filters out all chars except ()
  *   begin at first index of newstring
  *   if char equals '(' and next char does not equal )
  *     return false
  *   if char equals ) and next char does not equal (
  *     return false
  *   otherwise
  *     recurse
  * 
  * @param {*} str 
  */


// function balancedParens(str) {
//   // 

// }

// let str = '()ghard)d'

const balancedParens = (str) => {
  const bracketTypes = {
    '(': 0,
    ')': 0,
    ']': 0,
    '[': 0,
    '{': 0,
    '}': 0,
  };

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') bracketTypes['('] += 1;
    if (str[i] === ')') bracketTypes[')'] += 1;
    if (str[i] === '[') bracketTypes['['] += 1;
    if (str[i] === ']') bracketTypes[']'] += 1;
    if (str[i] === '{') bracketTypes['{'] += 1;
    if (str[i] === '}') bracketTypes['}'] += 1;
  }

  if (bracketTypes['('] !== bracketTypes[')'] || bracketTypes['['] !== bracketTypes[']'] || bracketTypes['{'] !== bracketTypes['}']) {
    return false;
  }

  return false;
};

module.exports = balancedParens;
