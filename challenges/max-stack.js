/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.Stack = [];
  this.length = 0;
}

Stack.prototype.push = function(val) {
  this.Stack[this.length] = val;
  this.length++;

  return val;
}

Stack.prototype.pop = function() {
  const lastVal = this.Stack[this.length - 1]
  const copy = this.Stack.slice(0, this.length - 1)
  this.Stack = copy
  this.length -= 1;

  return lastVal;
}

Stack.prototype.getMax = function() {
  let largestVal = 0

  for (let i = 0; i < this.Stack.length; i++) {
    if (this.Stack[i] > largestVal) {
      largestVal = this.Stack[i]
    }
  }
  return largestVal
}

// let myStack = new Stack()

// myStack.push(1)
// myStack.push(2)
// myStack.push(6)
// myStack.push(2)

// console.log(myStack.getMax())

module.exports = Stack;