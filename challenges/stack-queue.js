/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function push(val) {
  this.storage[this.index] = val;
  this.index += 1;
};

Stack.prototype.pop = function pop() {
  const poppedVal = this.storage[this.index];
  delete this.storage[this.index];
  this.index -= 1;
};

/**
* Queue Class
*/

function Queue() {
  this.enQueueStack = new Stack();
  this.deQueueStack = new Stack();
  // this.firstIn = null;
  // this.storage;
  // this.index;
}

Queue.prototype.enQueue = function enQueue(val) {
  this.enQueueStack.push(val);
  this
  // this.deQueueStack.push(this.enQueueStack.pop());
};

Queue.prototype.deQueue = function deQueue() {
  this.deQueueStack.pop();
};

const qInst = new Queue();
console.log(qInst);

qInst.enQueue('cat')
module.exports = { Stack, Queue };
