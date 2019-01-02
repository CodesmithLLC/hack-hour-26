/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens( '(' );  // false
 *   balancedParens( '()' ); // true
 *   balancedParens( ')(' );  // false
 *   balancedParens( '(())' );  // true
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

/* eslint-disable padded-blocks, no-trailing-spaces */

function balancedParens(input, open = false) {
  if (typeof input === 'string') {
    
    const brackets = {
      '(': ')',
      '[': ']',
      '{': '}',
    };
    const openings = Object.keys(brackets);
    const closings = Object.values(brackets);
    const chars = input.split('');
    let currentlyOpen = open;
    // iterate over chars array tracking index
    // when you find an opening bracket, find index of the closing bracking using lastIndexOf(). Check to see if lastIndex is greater than current index
    // we need to keep track if we're currently open in case we encounter a closing bracket. If open is false during a closing bracket, return false
    chars.forEach((char, ix) => {
      // if you find an opening bracket, keep going!
      if (openings.includes(char)) {
        currentlyOpen = balancedParens(chars.slice(ix + 1, true));
      }
      if (closings.includes(char) && currentlyOpen === false) return false;
    });

    if (currentlyOpen === false) return true;
  
  }
}

module.exports = balancedParens;

// * TESTING * //

console.log(`'()' -> true : ${balancedParens('()')}`);
console.log(`'(' -> false : ${balancedParens('(')}`);
console.log(`')' -> false : ${balancedParens(')')}`);
console.log(`'(())' -> true : ${balancedParens('(())')}`);
console.log(`'(()' -> false : ${balancedParens('(()')}`);
