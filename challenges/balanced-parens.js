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

const balancedParens = input => {
  // create an empty stack
  const stack = [];
  const openers = ['(', '[', '{'];
  const closers = [')', ']', '}'];
  // create an obj containing all of the matching closing brackets
  const matches = {
    '}': '{',
    ')': '(',
    ']': '['
  };

  let lastIn;
  // loop over string, add each bracket to stack
  for (let i = 0; i < input.length; i++) {
    // if closing bracket is encountered, pop most recent thing off of call stack
    if (closers.includes(input[i])) {
      lastIn = stack.pop();
      // check that pop against the obj, if a match keep looping, otherwise return false
      if (matches[input[i]] !== lastIn) return false;
    }

    if (openers.includes(input[i])) stack.push(input[i]);
  }

  if (stack.length === 0) return true;
  return false;
};

let str = '( var wow  = { yo: thisIsAwesome( })'; // => [(,(,),)]

console.log(balancedParens(str));

module.exports = balancedParens;
