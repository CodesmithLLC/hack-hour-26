/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

const Stack = {
  //push should return the new length of the stack.
  push: arr => {
    return arr.length;
  },

  //pop should return the element that was just removed.
  pop: arr => {
    let popped = arr[arr.length - 1];

    arr[(arr.length -= 1)];
    return popped;
  },

  //getMax should return the largest value currently in the stack.
  getMax: arr => {
    return Math.max(...arr);
  }
  //object
};
console.log(Stack.pop([1, 2, 3, 4, 5, 6, 9, 10, 11, 16, 12]));
console.log(Stack.push([1, 2, 3, 4, 5, 6, 9, 10, 11, 16, 12]));
console.log(Stack.getMax([1, 2, 3, 4, 5, 6, 9, 10, 11, 16, 12]));

module.exports = Stack;
