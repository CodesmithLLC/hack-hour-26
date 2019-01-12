/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = [];
  this.max = Number.NEGATIVE_INFINITY;
  this.prevMax = Number.NEGATIVE_INFINITY;
}
Stack.prototype.push = function a(val) {
  if (val > this.max) {
    this.prevMax = this.max;
    this.max = val;
  }
  this.stack[this.stack.length] = val;
  return this.stack.length;
};

Stack.prototype.pop = function b() {
  const popped = this.stack.splice(this.stack.length - 1, 1);
  if (popped >= this.max) {
    this.max = this.prevMax;
  }
  return popped;
};


Stack.prototype.getMax = function c() {
  // const temp = this.stack.slice();
  // temp.sort();
  // if (temp.length === 0) return -1;
  // return temp[temp.length - 1];
  return this.max;
};


module.exports = Stack;

const fake = new Stack();


console.log(`Max: ${typeof fake.getMax()}`);
console.log(`Max: ${fake.getMax()}`);
console.log(`Push (return length): ${fake.push(2)}`);
console.log(`Push (return length): ${fake.push(3)}`);
console.log(`Push (return length): ${fake.push(0)}`);
console.log(fake.stack);
console.log(`POP (return popped): ${fake.pop()}`);
console.log(`Max: ${fake.getMax()}`);
console.log(fake.stack);
console.log(`POP (return popped): ${fake.pop()}`);
console.log(`Max: ${fake.getMax()}`);
console.log(fake.stack);
