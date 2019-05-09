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

// Done

function balancedParens(input) {
  if (typeof input !== 'string') return false;
  const stringParens = [];
  const beginBrackSet = new Set(['(', '[', '{']);
  const endBrackSet = new Set([')', ']', '}']);
  for (let i = 0; i < input.length; i += 1) {
    if (beginBrackSet.has(input.charAt(i))) {
      stringParens.push(input.charAt(i));
    }
    if (endBrackSet.has(input.charAt(i))) {
      if (input.charAt(i) === ')' && stringParens[stringParens.length - 1] === '(') stringParens.pop();
      if (input.charAt(i) === ']' && stringParens[stringParens.length - 1] === '[') stringParens.pop();
      if (input.charAt(i) === '}' && stringParens[stringParens.length - 1] === '{') stringParens.pop();
    }
  }
  if (stringParens.length === 0) return true;
  return false;
}

module.exports = balancedParens;
