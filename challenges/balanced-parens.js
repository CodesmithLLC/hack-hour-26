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
  //compare symbols and check if returned object is even
  let arr = [];

  let newPut = [...input];
  newPut = newPut.toString().match(/[\{\}\[\]\(\)]/g);

  for (let i = 0; i < newPut.length; i++) {
    // push values until I reach a closing bracket
    if (newPut[i] === "{" || newPut[i] === "[" || newPut[i] === "(") {
      arr.push(newPut[i]);
    }
    if (newPut[i] === "}" && arr[arr.length - 1] === "{") {
      arr.pop();
    } else if (newPut[i] === "]" && arr[arr.length - 1] === "[") {
      arr.pop();
    } else if (newPut[i] === ")" && arr[arr.length - 1] === "(") {
      arr.pop();
    }
    // when a closing bracket is reached
    // compare to last item in array
    // if it matches then pop both items off
    //if not return false
  }

  return arr.length === 0;

  // return true if array is empty
}

// balancedParens(" var wow  = { yo: thisIs[]Awesome() }");
console.log(balancedParens("[](){}")); // true
console.log(balancedParens("[({})]")); // true
console.log(balancedParens("[(]{)}")); // false
console.log(balancedParens(" var wow  = { yo: thisIsAwesome() }")); // true
console.log(balancedParens(" var hubble = function() { telescopes.awesome();")); // false

module.exports = balancedParens;
