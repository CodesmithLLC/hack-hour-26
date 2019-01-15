/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.theStack = {};
  this.count = 0;
};

Stack.prototype.push = (value) => {
  this.theStack[this.count] = value;
  this.count += 1;
};

Stack.prototype.pop = () => {
  delete this.theStack[this.count];
  this.count -= 1;
};

console.log(Stack.push(7));

module.exports = Stack;