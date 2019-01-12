/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = [];
  this.count = 0;
  this.max;
}

Stack.prototype.push = function (val) {
  this.storage[this.count] = val;
  this.count += 1;
  return this.storage.length;
}

Stack.prototype.pop = function () {
  this.count -= 1;
  const del = this.storage[this.count];
  this.storage.length = this.count;
  return del;
}

Stack.prototype.getMax = function () {
  this.storage.sort((a, b) => a < b);
  return this.storage[0];
}

const stack = new Stack();

stack.push(7);
stack.push(12);
stack.push(2);
stack.push(11);

console.log(stack.storage);
console.log(stack.pop());
console.log(stack.storage);
console.log(stack.getMax());

module.exports = Stack;