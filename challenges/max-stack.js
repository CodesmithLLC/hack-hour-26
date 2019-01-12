/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = [];
  this.length = 0;
}

Stack.prototype.push = function(val) {
  this.stack.push(val);
  this.length++;
  return this.length;
};

Stack.prototype.pop = function() {
  const poppedElement = this.stack.pop();
  this.length--;
  return poppedElement;
};

Stack.prototype.getMax = function() {
  const copiedStack = this.stack.slice();
  const sortedCopy = copiedStack.sort((a, b) => b - a);
  return sortedCopy[0];
};

const testStack = new Stack();
testStack.push(1);
testStack.push(3);
testStack.push(2);
testStack.push(10);
console.log(testStack);

console.log(testStack.getMax());

module.exports = Stack;
