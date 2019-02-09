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
  this.first = 0;
  this.last = 0;
  this.penUltVal = 0;
  this.maxVal = { val: 0, index: 0 };
}

const stck = new Stack();

Stack.prototype.push = (val) => {
  this.storage[this.index] = val;

  if (val > this.maxVal.val) {
    this.maxVal.val = val;
    this.maxVal.index = this.index;
  }
  if (val > this.penUltVal.val) {
    this.penUltVal = val;
    this.penUltVal.index = this.index;
  }

  this.index += 1;
  return this.index;
};

Stack.prototype.pop = () => {
  const lastVal = this.storage[this.index];
  delete this.storage[this.index];
  this.index -= 1;

  return lastVal;
};

Stack.prototype.getMax = () => {
  return this.count;
};

stck.push(1);
console.log(stck)

module.exports = Stack;