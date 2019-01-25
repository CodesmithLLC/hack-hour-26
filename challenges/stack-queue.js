/**
 * Create a stack.Then create a queue using two stacks.
 */

// * FIRST IN LAST OUT
function Stack() {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function(val) {
  this.storage[this.length] = val;
  this.length += 1;
};

Stack.prototype.pop = function() {
  let poppedValue = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length -= 1;
  return poppedValue;
};

/**
 * Queue Class
 */

// * LAST IN FIRST OUT
function Queue() {
  this.inbox = new Stack();
  this.outbox = new Stack();

  this.enqueue = val => this.inbox.push(val);

  this.dequeue = () => {
    if (this.outbox.length > 0) {
      return this.outbox.pop();
    }
    while (this.inbox.length >= 0) {
      this.outbox.push(this.inbox.pop());
      console.log('this.outbox: ', this.outbox);
    }
    return this.outbox.pop();
  };
}

// let testQueue = new Queue();
// testQueue.enqueue(1);
// testQueue.enqueue(2);
// testQueue.enqueue(3);
// console.log('testQueue: ', testQueue.inbox);

// testQueue.dequeue();
// console.log('dequeued', testQueue.outbox);
// console.log('testQueue.dequeue();: ', testQueue.dequeue());

module.exports = { Stack: Stack, Queue: Queue };
