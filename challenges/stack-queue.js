/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack(val) {
  let arr = [];
  arr.push(val);
  return arr.pop();
}

/**
 * Queue Class
 */

function Queue() {
  let arr = [];

  arr.unshift(Stack(3));
  arr.unshift(Stack(5));
  return arr.pop();
}

1070;
// correct solution
// var stack = [];
// stack.push(2);       // stack is now [2]
// stack.push(5);       // stack is now [2, 5]
// var i = stack.pop(); // stack is now [2]
// alert(i);            // displays 5

// var queue = [];
// queue.push(2);         // queue is now [2]
// queue.push(5);         // queue is now [2, 5]
// var i = queue.shift(); // queue is now [5]
// alert(i);

console.log(Queue());

module.exports = { Stack: Stack, Queue: Queue };
