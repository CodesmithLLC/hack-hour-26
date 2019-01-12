/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  const stack = [];
  let maxValue;
  Stack.prototype.push = function (value) {
    if (value > maxValue || maxValue === undefined) maxValue = value;
    stack[stack.length] = value;
    return stack.length;
  }
  Stack.prototype.pop = function () {
    const poppedOff = stack[stack.length - 1];
    if (stack[stack.length - 1] === maxValue) {
      stack.length = stack.length - 1;
      const sortStack = stack.slice();
      sortStack.sort((a, b) => {
        return b - a;
      })
      maxValue = sortStack[0];
    }
    return poppedOff;
  }
  Stack.prototype.getMax = function () {
    return maxValue;
  }

}

const myStack = new Stack();

module.exports = Stack;