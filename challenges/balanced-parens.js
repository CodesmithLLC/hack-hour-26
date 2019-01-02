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
  let obj = [];
  let parent = [];
  let newPut = [...input];
  newPut = newPut.toString().match(/[\{\}\[\]\(\)]/g);

  for (let i = 0; i <= newPut.length; i++) {
    console.log(newPut);
    //arr check
    // if(newPut[i] === '[' && !arr.includes('[')) {
    //   arr.push(newPut[i])
    // }
    if (newPut[i] === "[" && !arr.includes("[")) {
      arr.push(newPut[i]);
      if (newPut[i + 1] !== "]" || newPut[newPut.length - 1] !== "]") {
        return false;
      }
      if (newPut[i + 1] === "]") {
        arr.push(newPut[i]);
        arr.push(newPut[i + 1]);
        arr.splice(0, 2);
      }
      if (newPut[newPut.length - 1] === "]") {
        arr.push(newPut[i]);
        arr.push(newPut[newPut.length - 1]);
        arr.splice(0, 1);
      }
    }
    //obj
    if (newPut[i] === "{" && !arr.includes("{")) {
      arr.push(newPut[i]);
      if (newPut[i + 1] !== "}" || newPut[newPut.length - 1] !== "}") {
        return false;
      }
      if (newPut[i + 1] === "}") {
        arr.push(newPut[i]);
        arr.push(newPut[i + 1]);
        arr.splice(0, 2);
      }
      if (newPut[newPut.length - 1] === "}") {
        arr.push(newPut[i]);
        arr.push(newPut[newPut.length - 1]);
        arr.splice(newPut.length - 1, 1);
      }
    }
    //parent
    if (newPut[i] === "(" && !arr.includes("(")) {
      arr.push(newPut[i]);
      if (newPut[i + 1] !== ")" || newPut[newPut.length - 1] !== ")") {
        return false;
      }
      if (newPut[i + 1] === ")") {
        arr.push(newPut[i]);
        arr.push(newPut[i + 1]);
        arr.splice(0, 2);
      }
      if (newPut[newPut.length - 1] === ")") {
        arr.push(newPut[i]);
        arr.push(newPut[newPut.length - 1]);
        arr.splice(0, 1);
        arr.splice(newPut.length - 1, 1);
      }
    }
    console.log(newInput);
  }
  if (obj.length > 0 && obj.length % 2 !== 0) {
    return false;
  }
  if (arr.length > 0 && arr.length % 2 !== 0) {
    return false;
  }
  if (parent.length > 0 && parent.length % 2 !== 0) {
    return false;
  }

  return true;
}

// balancedParens(" var wow  = { yo: thisIs[]Awesome() }");
balancedParens("[(]{)}");

module.exports = balancedParens;
