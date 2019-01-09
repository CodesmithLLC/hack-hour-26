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
function balanced(input) {
  let paren;
  if (input.indexOf('(') === -1 && input.indexOf('(') === -1) {
    return true;
  }
  if (input.indexOf('(') >= 0 && input.indexOf('(') >= 0) {
    paren = input.slice(input.indexOf('(') + 1, input.lastIndexOf(')'));
  }
  return balanced(paren);
}
function balancedParens(input) {
  const obj = { paren: true, brack: true, curl: true };

  for (let i = 0; i < input.length; i += 1) {
    switch (input.charAt(i)) {
      case '(':
        obj.paren = false;
        break;
      case ')':
        obj.paren = true;
        break;
      case '[':
        obj.brack = false;
        break;
      case ']':
        obj.brack = true;
        break;
      case '{':
        obj.curl = false;
        break;
      case '}':
        obj.curl = true;
        break;
      default:
    }
  }
  return obj.paren && obj.brack && obj.curl;
}
console.log('------ just paren -------');
console.log(balancedParens('(')); // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')(')); // false
console.log(balanced('((sd))')); // true
console.log('------ all types -------');
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]')); // true
console.log(balancedParens('[(]{)}')); // false
console.log('------ ignore non-bracket character -------');
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false

module.exports = balancedParens;
