/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  let stack = [];
  Stack.prototype.push = function (param){
    stack[stack.length] = param;    
    return stack.length;
  } 
  Stack.prototype.pop = function () {
    let popped = stack[stack.length -1];
    stack.length = stack.length-1
    return popped;
  }
  Stack.prototype.getMax = function() {
    let max = stack[0];
    stack.forEach(el => {
      if(el > max) max = el;
    })
    return max
  }
  console.log(Stack.prototype.getMax());
}
module.exports = Stack;