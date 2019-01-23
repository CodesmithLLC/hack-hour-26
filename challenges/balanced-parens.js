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
  // const balanced = {
    //   '(': ')',
    //   '{': '}',
    //   '[': ']'
    // };
  // have an array of items to check
  const parens = ['(', ')'];
  const brackets = ['[', ']'];
  const curly = ['{', '}'];

  const firsts = [];
  const lasts = []
  // iterate through the array and check for opening/closing parens
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] == parens[0]) {
      firsts.push(input[i]);
    } else if (input[i] === parens[1]) {
      lasts.push(input[i])
    }
    if (input[i] == brackets[0]) {
      firsts.push(input[i]);
    } else if (input[i] === brackets[1]) {
      lasts.push(input[i])
    }
    if (input[i] == curly[0]) {
      firsts.push(input[i]);
    } else if (input[i] === curly[1]) {
      lasts.push(input[i])
    }
  }
  if (firsts.length === lasts.length) {
    // return true
    return true;
  }
  // if not found, return false
  return false;
}

module.exports = balancedParens;

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false