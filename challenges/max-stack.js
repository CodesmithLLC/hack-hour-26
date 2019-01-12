/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.index = 0;
  this.largest = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
  if (value > this.largest) this.largest = value;
  return this.index - 1;
}

Stack.prototype.pop = function() {
  this.index--;
  const toReturn = this.storage[this.index];
  delete this.storage[this.index];
  return toReturn;
}

Stack.prototype.getMax = function() {
  return this.largest;
}

module.exports = Stack;