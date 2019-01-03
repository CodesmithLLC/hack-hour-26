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

  let parensStack = [];
  let bracketStack = [];
  let curlyStack = [];

  for(let i=0; i<input.length; i++){
    console.log(input.charAt(i))
    switch(input.charAt(i)){
      
      case '[':
      bracketStack.push('[');
      break;

      case ']':

      if(bracketStack.length ===0){
        return false;
      }

      bracketStack.pop();

      break;

      case '{':
      curlyStack.push('{');
      break;

      case '}':
      if(curlyStack.length===0){
        return false;
      }

      curlyStack.pop();
      break;

      case '(':
      parensStack.push('(');
      break;

      case ')':
      if(parensStack.length===0){
        return false;
      }

      parensStack.pop();
      break;

      default:
      break;
    }
  }

  if(bracketStack.length>0 || curlyStack.length>0 ||parensStack.length>0) {
    return false;
  }

  return true;



}

console.log(balancedParens('( ) ( ( ) ) ) ( [ ] ( ) { } [ ( { } ) ] [ ( ] { ) } v a r w o w = { y o : t h i s I s A w e s o m e ( ) } v a r h u b b l e = f u n c t i o n ( ) { t e l e s c o p e s . a w e s o m e ( )'));
module.exports = balancedParens;
