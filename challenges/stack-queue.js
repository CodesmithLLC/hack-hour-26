/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = {};
  this.index = 0;
}

Stack.prototype.push = function b(val) {
  this.stack[this.index] = val;
  this.index += 1;
  return this.index;
};

Stack.prototype.pop = function a() {
  this.index -= 1;
  const temp = this.stack[this.index];
  delete this.stack[this.index];
  return temp;
};


/**
* Queue Class
*/


function Queue() {
  this.queue = new Stack();
  this.queue2 = new Stack();
  this.index = 0;
}

Queue.prototype.enqueue = function c(val) {
  this.queue.push(val);
  return this.queue.index;
};

Queue.prototype.dequeue = function d() {
  while (this.queue.index > 0) {
    this.queue2.push(this.queue.pop());
  }
  const temp = this.queue2.pop();
  while (this.queue2.index > 0) {
    this.queue.push(this.queue2.pop());
  }
  return temp;
};

module.exports = { Stack, Queue };


// const stack1 = new Stack();
// const stack2 = new Stack();
// const queue = new Queue();

// console.log('------ stack ------');
// console.log(stack1.push(1));
// console.log(stack1.push(2));
// console.log(stack1.push(3));
// console.log(stack1.stack);
// console.log(stack1.pop());
// console.log(stack1.stack);


// console.log('------ queue ------');
// console.log(queue.enqueue(1));
// console.log(queue.enqueue(2));
// console.log(queue.queue.stack);
// console.log(queue.dequeue());
// console.log(queue.queue.stack);
