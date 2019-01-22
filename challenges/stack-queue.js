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

console.log(Queue());

module.exports = { Stack: Stack, Queue: Queue };
